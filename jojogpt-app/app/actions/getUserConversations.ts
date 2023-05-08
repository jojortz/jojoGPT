import { Conversation } from "../types"

export default function getUserConversations(id: string) {
  const test_conversations: Conversation[] = [
    {
      id: '1',
      title: "Convo1",
      messages: "FROM:\nHey what's up??"
    },
    {
      id: '2',
      title: "Convo2",
      messages: "FROM:\nI'll be home at 8 :)"
    },
    {
      id: '3',
      title: "Convo3",
      messages: "FROM:\nThat's a good idea!"
    },
  ]
  return test_conversations
}