/* eslint-disable no-underscore-dangle */

import React, { useContext, useEffect } from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { isMessageAuthor } from '@/helpers/functions/isMessageAuthor'
import { WebSocketContext } from '@/helpers/context/websocketCtx'
import { Conversation, MessagePayload } from '@/helpers/types'

type ConversationMessagesPanelProps = {
  conversation: Conversation
}
export function ConversationMessagesPanel({
  conversation,
}: ConversationMessagesPanelProps) {
  const authUser = useAuth((state) => state.user)
  const socket = useContext(WebSocketContext)
  const { messages, addMessage } = useMessages((state) => state)

  useEffect(() => {
    socket.on('connect', () => console.log('connected from front-end'))
    socket.on('onMessage', (payload: MessagePayload) => {
      console.log(payload)
      if (conversation._id === payload.conversation._id) {
        addMessage(payload.message)
      }
    })

    return () => {
      socket.off('connect')
      socket.off('onMessage')
    }
  }, [addMessage, conversation._id, socket])
  return (
    <div className="overflow-auto space-y-3 grid grid-cols-1 p-10 overflow-x-hidden">
      {messages.length !== 0 ? (
        messages.map((message) => (
          <div
            key={message._id}
            className={`flex gap-4 break-all ${isMessageAuthor(authUser, message.author.email) ? 'place-self-end flex-row-reverse' : 'place-self-start flex-row'}`}
          >
            <Avatar>
              <AvatarFallback>{message.author.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div
              className={`g-white p-3 rounded-2xl ${isMessageAuthor(authUser, message.author.email) ? 'rounded-tr-none bg-green-300' : 'rounded-tl-none bg-gray-400'}`}
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
