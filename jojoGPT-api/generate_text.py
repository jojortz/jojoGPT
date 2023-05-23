import os
import torch
import tiktoken
from model import GPTConfig, GPT

    # -----------------------------------------------------------------------------
device = 'cpu' # examples: 'cpu', 'cuda', 'cuda:0', 'cuda:1', etc.
max_new_tokens = 100 # number of tokens generated in each sample
temperature = 0.8 # 1.0 = no change, < 1.0 = less random, > 1.0 = more random, in predictions
top_k = 200 # retain only the top_k most likely tokens, clamp others to have 0 probability
device_type = 'cpu'#'cuda' if 'cuda' in device else 'cpu' # for later use in torch.autocast
dtype = 'bfloat16' # 'float32' or 'bfloat16' or 'float16'
ptdtype = {'float32': torch.float32, 'bfloat16': torch.bfloat16, 'float16': torch.float16}[dtype]

def init_model():
    print('Initializing model...')
    global model, encode, decode
    seed = 1337
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)
    torch.backends.cuda.matmul.allow_tf32 = True # allow tf32 on matmul
    torch.backends.cudnn.allow_tf32 = True # allow tf32 on cudnn


    # init from a model saved in a specific directory
    model_dir = 'model'
    ckpt_path = os.path.join(model_dir, 'ckpt_everyone.pt')
    checkpoint = torch.load(ckpt_path, map_location=device)
    gptconf = GPTConfig(**checkpoint['model_args'])
    model = GPT(gptconf)
    state_dict = checkpoint['model']
    unwanted_prefix = '_orig_mod.'
    for k,v in list(state_dict.items()):
        if k.startswith(unwanted_prefix):
            state_dict[k[len(unwanted_prefix):]] = state_dict.pop(k)
    model.load_state_dict(state_dict)

    model.eval()
    model.to(device)
    enc = tiktoken.get_encoding("gpt2")
    encode = lambda s: enc.encode(s, allowed_special={"<|endoftext|>"})
    decode = lambda l: enc.decode(l)
    print('Initialization complete :)')

def get_new_message(chat_history):
    init_model()
    start_ids = encode(chat_history)
    x = (torch.tensor(start_ids, dtype=torch.long, device=device)[None, ...])

    # run generation

    with torch.no_grad():
        y = model.generate(x, max_new_tokens, temperature=temperature, top_k=top_k)
        raw_output = decode(y[0].tolist())
        after_start = ("").join(raw_output.split(chat_history)[1:])
        new_message = after_start.split("\nFROM:\n")[0]
        chat_history += new_message + "\n"
        return new_message