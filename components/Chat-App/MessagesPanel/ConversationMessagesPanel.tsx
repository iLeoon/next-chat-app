import React from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MessagesInputField } from './MessagesInputField'

export function ConversationMessagesPanel() {
  const { messages } = useMessages((state) => ({
    messages: state.messages,
  }))
  const user = useAuth((state) => state.user)

  return (
    <>
      <div className="">
        {messages.map((message) => (
          <div className="flex flex-row">
            <Avatar className="w-5 h-5 rounded-full">
              <AvatarFallback>
                {message.author.image
                  ? message.author.image
                  : message.author.name.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{message.content}</span>
            <span>{user.name}</span>
          </div>
        ))}
      </div>
      <MessagesInputField />
    </>
  )
}
