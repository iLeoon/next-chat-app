// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'
import type { Message } from '@/helpers/types'
import { devtools } from 'zustand/middleware'

type MessageStore = {
  messages: Message[]
  setMessages: (messages: Message[]) => void
  addMessage: (message: Message) => void
}

export const useMessages = create<MessageStore>()(
  devtools(
    (set, get) => ({
      messages: [],
      setMessages: (messages) => set(() => ({ messages })),
      addMessage: (msg) =>
        set(() => {
          const { messages } = get()
          messages.push(msg)
          return { messages }
        }),
    }),
    { name: 'Messages' },
  ),
)
