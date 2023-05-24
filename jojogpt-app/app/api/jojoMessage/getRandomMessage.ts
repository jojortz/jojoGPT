const messages = [
  "cool dog",
  "what's up?",
  "lolllll",
  "lmao",
  "woah didn't realize that",
  "ok sounds good!",
  "Where did James go??",
  "Yeah I’ll send me a message a message - I found this $99 for your mood…",
  "Just gotcha",
  "Hahaha ok I’ll share whose you up",
  "Also eaaaaaa unfortunately",
  "Looking into Huro was flights yet",
  "Heading out now, should be back in 10",
  "I can go come pick you up",
  "Yeah sure what’s going to your place",
  "IMG_3929.HEIC (Image)",
  "Ok plan a place at Flaming come",
  "IMG_3975.HEIC (Image)",
  "Screenshot 2020-13 at 10.27.50 PM.png (Image)",
  "Oh cool!",
  "Ok! Just getting out of the house",
  "Happy Birthday homie! Hope its job!!",
  "I just have 5 brush",
  "I just got a safe area",
  "Lolol didn’t realize you were on it too",
  "Screenshot 2021-13 at 12.18 at 6.25 PM.png (Image)"
]

export default function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}