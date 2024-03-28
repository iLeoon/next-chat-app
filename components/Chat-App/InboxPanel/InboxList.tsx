import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import React from 'react'
import InboxTable from './InboxTable'

export default function InboxList() {
  return (
    <Card className=" rounded-none h-screen">
      <CardHeader>
        <CardTitle>Inbox</CardTitle>
      </CardHeader>
      <CardContent>
        <InboxTable />
      </CardContent>
    </Card>
  )
}
