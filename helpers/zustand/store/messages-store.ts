// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'
import type { Message } from '@/helpers/types'
import { devtools } from 'zustand/middleware'

type MessageStore = {
  messages: Message[]
  setMessage: (message: Message[]) => void
}

export const useMessages = create<MessageStore>()(
  devtools(
    (set) => ({
      messages: [],
      setMessage: (msg) => set(() => ({ messages: msg })),
    }),
    { name: 'Messages' },
  ),
)
