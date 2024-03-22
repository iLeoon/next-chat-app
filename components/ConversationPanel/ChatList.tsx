'use client'

import React from 'react'
import Conversations from './Conversations'
import { Card, CardContent } from '../ui/card'
import SearchField from './SearchField'
import { Separator } from '../ui/separator'
import { AddConversation } from './AddConversation'

export default function ChatList() {
  return (
    <Card className="w-80 rounded-none">
      <CardContent>
        <div className="flex items-center justify-start gap-6 my-5">
          <SearchField />
          <AddConversation />
        </div>
        <Separator className="my-7 w-full" />
        <div className="">
          <Conversations />
        </div>
      </CardContent>
    </Card>
  )
}
