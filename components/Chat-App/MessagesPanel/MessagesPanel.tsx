/* eslint-disable no-underscore-dangle */
import React from 'react'
import type { Conversation } from '@/helpers/types'
import { ConversationMessagesPanel } from './ConversationMessagesPanel'
import { MessagesForm } from './MessagesForm'
import MessagesHeader from './MessagesHeader'

type MessagePanelProps = {
  conversation: Conversation
}
export function MessagesPanel({ conversation }: MessagePanelProps) {
  return (
    <div className="h-full">
      <div className="flex flex-col h-svh">
        <MessagesHeader conversation={conversation} />
        <ConversationMessagesPanel conversation={conversation} />
        <MessagesForm conversation={conversation} />
      </div>
    </div>
  )
}
