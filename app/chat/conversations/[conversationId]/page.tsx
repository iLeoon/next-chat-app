'use client'

import React, { useEffect } from 'react'
import { MessagesPanel } from '@/components/Chat-App/MessagesPanel/MessagesPanel'
import { getConversationById } from '@/helpers/api/conversations/getConversationById'
import { useMessages } from '@/helpers/zustand'
import { useQuery } from '@tanstack/react-query'

export default function ConversationMessages({
  params,
}: {
  params: { conversationId: string }
}) {
  const { setMessages } = useMessages((state) => state)

  const { data, isSuccess } = useQuery({
    queryKey: ['get-conversationByID', [params.conversationId]],
    queryFn: async () => getConversationById(params.conversationId),
  })

  useEffect(() => {
    if (isSuccess) {
      if (data.messages.length !== 0) {
        setMessages(data.messages)
        return
      }

      setMessages([])
    }
  }, [data, isSuccess, setMessages])
  return (
    <div className="h-full">
      {isSuccess ? <MessagesPanel conversation={data} /> : ''}
    </div>
  )
}
