/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { isMessageAuthor } from '@/helpers/functions/isMessageAuthor'

export function ConversationMessagesPanel() {
  const authUser = useAuth((state) => state.user)
  const { messages } = useMessages((state) => ({
    messages: state.messages,
  }))

  return (
    <div className="overflow-auto space-y-3 grid grid-cols-1 p-10 overflow-x-hidden">
      {messages.length !== 0 ? (
        messages.map((message) => (
          <div
            key={message._id}
            className={`flex gap-4 ${isMessageAuthor(authUser, message.author) ? 'place-self-end flex-row-reverse' : 'place-self-start flex-row'}`}
          >
            <Avatar>
              <AvatarFallback>{message.author.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div
              className={`g-white p-3 rounded-2xl ${isMessageAuthor(authUser, message.author) ? 'rounded-tr-none bg-green-300' : 'rounded-tl-none bg-gray-400'}`}
            >
              {message.content}
            </div>
          </div>
        ))
      ) : (
        <div>Try to send a message </div>
      )}
    </div>
  )
}
