import React from 'react'
import { ConversationMessagesPanel } from './ConversationMessagesPanel'
import { MessagesForm } from './MessagesForm'

type MessagePanelProps = {
  conversationId: string
}
export function MessagesPanel({ conversationId }: MessagePanelProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <ConversationMessagesPanel />
      <MessagesForm conversationId={conversationId} />
    </div>
  )
}
