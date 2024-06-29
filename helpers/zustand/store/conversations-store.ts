/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { create } from 'zustand'
import type { Conversation } from '@/helpers/types'
import { devtools } from 'zustand/middleware'

type ConversationStore = {
  conversations: Conversation[]
  setConversations: (conversations: Conversation[]) => void
  updateConversation: (conversation: Conversation) => void
}

export const useConversations = create<ConversationStore>()(
  devtools(
    (set, get) => ({
      conversations: [],
      setConversations: (conversations) => set(() => ({ conversations })),
      updateConversation: (conversation) =>
        set(() => {
          const { conversations } = get()
          const index = conversations.findIndex(
            (c) => conversation._id === c._id,
          )

          conversations[index] = conversation
          return { conversations }
        }),
    }),
    { name: 'Conversations' },
  ),
)
