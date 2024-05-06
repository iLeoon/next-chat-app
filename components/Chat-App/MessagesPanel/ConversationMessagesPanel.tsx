import React, { useRef, useEffect } from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function ConversationMessagesPanel() {
  const { messages } = useMessages((state) => ({
    messages: state.messages,
  }))
  const container = useRef<HTMLDivElement>(null)

  const Scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      container.current as HTMLDivElement
    if (scrollHeight <= scrollTop + offsetHeight + 100) {
      container.current?.scrollTo(0, scrollHeight)
    }
  }

  useEffect(() => {
    Scroll()
  }, [messages])

  const user = useAuth((state) => state.user)

  return (
    <div className="h-full p-9" ref={container}>
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
  )
}
