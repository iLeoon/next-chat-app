'use client'

import { MessagesPanel } from '@/components/Chat-App/MessagesPanel/MessagesPanel'
import { getConversationById } from '@/helpers/api/conversations/getConversationById'
import { useMessages } from '@/helpers/zustand'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ConversationMessages({
  params,
}: {
  params: { conversationId: string }
}) {
  const { data, isSuccess } = useQuery({
    queryKey: ['get-conversationByID'],
    queryFn: async () => getConversationById(params.conversationId),
  })

  const setMessage = useMessages((state) => state.setMessages)

  if (isSuccess) {
    setMessage(data.messages)
  }
  console.log(data)
  return <div>{isSuccess ? <MessagesPanel conversation={data} /> : ''}</div>
}
