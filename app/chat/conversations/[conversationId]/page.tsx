'use client'

import { MessagesPanel } from '@/components/Chat-App/MessagesPanel/MessagesPanel'
import React from 'react'

export default function ConversationMessages({
  params,
}: {
  params: { conversationId: string }
}) {
  return <MessagesPanel conversationId={params.conversationId} />
}
