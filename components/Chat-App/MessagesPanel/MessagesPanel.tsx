import React from 'react'
import { ConversationMessagesPanel } from './ConversationMessagesPanel'
import { MessagesForm } from './MessagesForm'

export function MessagesPanel() {
  return (
    <div className="flex flex-col h-full w-full">
      <ConversationMessagesPanel />
      <MessagesForm />
    </div>
  )
}
