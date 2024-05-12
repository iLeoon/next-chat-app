import React, { useRef, useEffect, useContext } from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { WebSocketContext } from '@/helpers/context/websocketCtx'
import { isMessageAuthor } from '@/helpers/functions/isMessageAuthor'

export function ConversationMessagesPanel() {
  const authUser = useAuth((state) => state.user)
  const socket = useContext(WebSocketContext)
  const { messages } = useMessages((state) => ({
    messages: state.messages,
  }))
  const container = useRef<HTMLDivElement>(null)

  // const Scroll = () => {
  //   const { offsetHeight, scrollHeight, scrollTop } =
  //     container.current as HTMLDivElement
  //   if (scrollHeight <= scrollTop + offsetHeight + 100) {
  //     container.current?.scrollTo(0, scrollHeight)
  //   }
  // }

  useEffect(() => {
    // Scroll()
    socket.on('connect', () => console.log('connected from front-end'))
    socket.emit('message', () => {
      socket.on('onMessage', (data) => {
        console.log(data)
      })
    })
    return () => {
      socket.off('connect')
    }
  }, [])

  return (
    <div className="overflow-auto space-y-12 grid grid-cols-1 p-3 overflow-x-hidden">
      {messages.map((message) => (
        <div
          // eslint-disable-next-line no-underscore-dangle
          key={message._id}
          className={`${isMessageAuthor(authUser, message.author) ? 'place-self-end' : 'place-self-start'}`}
        >
          <div
            className={`g-white p-5 rounded-2xl ${isMessageAuthor(authUser, message.author) ? 'rounded-tr-none bg-green-300' : 'rounded-tl-none bg-gray-400'}`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  )
}
