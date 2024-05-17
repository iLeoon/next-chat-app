'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Conversations from './Conversations'
import SearchField from './SearchField'
import { AddConversation } from './AddConversation'

export default function ChatList() {
  return (
    <Card className="rounded-none h-svh">
      <CardContent className="p-0">
        <div className="flex items-center justify-start gap-6 border-b p-6">
          <SearchField />
          <AddConversation />
        </div>
        <div className="p-2">
          <Conversations />
        </div>
      </CardContent>
    </Card>
  )
}
