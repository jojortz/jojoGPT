from flask import Flask, jsonify, request
import generate_text


app = Flask(__name__)

#generate_text.init_model()


@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/jojo-message', methods=['POST'])
def predict():
    if request.method == 'POST':
        chat_history = request.json['chat_history']
        new_message = generate_text.get_new_message(chat_history)
        return jsonify({'new_message': new_message})