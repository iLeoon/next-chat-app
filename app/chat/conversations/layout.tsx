import * as React from 'react'
import ChatList from '@/components/Chat-App/ConversationPanel/ChatList'

export default function ConversationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {' '}
      <div className="flex">
        <ChatList />
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </>
  )
}
