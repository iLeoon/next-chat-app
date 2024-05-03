// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'
import type { Message } from '@/helpers/types'

type MessageStore = {
  messages: Message[]
  setMessage: (message: Message[]) => void
}

export const useMessages = create<MessageStore>((set) => ({
  messages: [],
  setMessage: (msg) => set(() => ({ messages: msg })),
}))
