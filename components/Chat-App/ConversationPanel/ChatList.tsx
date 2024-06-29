'use client'

import React, { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getConversations } from '@/helpers/api/conversations/getConversations'
import { useConversations } from '@/helpers/zustand/store/conversations-store'
import { CreateConversationDialog } from './CreateConversationDialog'
import Conversations from './Conversations'
import SearchField from './SearchField'

export default function ChatList() {
  const { data, isSuccess } = useQuery({
    queryKey: ['get-conversations'],
    queryFn: async () => getConversations(),
  })

  const { setConversations } = useConversations((state) => state)

  useEffect(() => {
    if (isSuccess) {
      if (data.length !== 0) {
        setConversations(data)
        return
      }

      setConversations([])
    }
  }, [data, isSuccess, setConversations])
  return (
    <Card className="rounded-none h-svh">
      <CardContent className="p-0">
        <div className="flex items-center justify-start gap-6 border-b p-6">
          <SearchField />
          <CreateConversationDialog />
        </div>
        <div className="p-2">
          <Conversations />
        </div>
      </CardContent>
    </Card>
  )
}
