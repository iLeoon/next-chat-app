'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CreateConversationDialog } from './CreateConversationDialog'
import Conversations from './Conversations'
import SearchField from './SearchField'

export default function ChatList() {
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
