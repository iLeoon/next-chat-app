import React from 'react'
import { Card, CardContent } from '../ui/card'
import SearchField from './SearchField'
import { Separator } from '../ui/separator'
import { AddConversation } from './AddConversation'

export default function ChatList() {
  return (
    <Card className="w-80 rounded-none">
      <CardContent>
        <div className="flex items-center justify-around gap-7">
          <SearchField />
          <AddConversation />
        </div>
      </CardContent>
      <Separator />
    </Card>
  )
}
