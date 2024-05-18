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
  const { data, isSuccess } = useQuery({
    queryKey: ['get-conversationByID', [params.conversationId]],
    queryFn: async () => getConversationById(params.conversationId),
  })

  const setMessage = useMessages((state) => state.setMessages)

  useEffect(() => {
    if (isSuccess) {
      if (data.messages.length !== 0) {
        setMessage(data.messages)
        return
      }

      setMessage([])
    }
  }, [data, isSuccess, setMessage])
  return (
    <div className="h-full">
      {isSuccess ? <MessagesPanel conversation={data} /> : ''}
    </div>
  )
}
