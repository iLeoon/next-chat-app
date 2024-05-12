// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'
import type { Message } from '@/helpers/types'
import { devtools } from 'zustand/middleware'

type MessageStore = {
  messages: Message[]
  setMessages: (message: Message[]) => void
  addMessage: (message: Omit<Message, '_id'>) => void
}

export const useMessages = create<MessageStore>()(
  devtools(
    (set) => ({
      messages: [],
      setMessages: (msg) => set(() => ({ messages: msg })),
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
    }),
    { name: 'Messages' },
  ),
)
