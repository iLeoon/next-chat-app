import React from 'react'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Card, CardContent } from '../ui/card'
import { Avatar } from '../ui/avatar'

const conversations = [
  {
    id: 1,
    avatar: 'L',
    name: 'Leon',
    lastmessage: 'Hello Brother I missed you',
  },
  {
    id: 2,
    avatar: 'CR',
    name: 'Cristiano Ronaldo',
    lastmessage: 'A5oia al don',
  },
  {
    id: 3,
    avatar: 'RM',
    name: 'Real Madrid',
    lastmessage: 'احنا هنمشي فينسيوس عايزينك',
  },
  {
    id: 4,
    avatar: 'D',
    name: 'Ro7y',
    lastmessage: 'Baby anta wa74ny awy moot',
  },
]
export default function Conversations() {
  return (
    <>
      {conversations.map((conv) => (
        <Card className="border-none my-8 shadow-none" key={conv.id}>
          <CardContent className="flex flex-row items-center justify-start gap-4 p-0">
            <div className="">
              <Avatar className=" bg-cyan-900 w-11 h-11">
                <AvatarFallback className="flex items-center justify-center h-full w-full">
                  {conv.avatar}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="pb-2 inline-block">
              <h1 className="text-lg">{conv.name}</h1>
              <p className="text-[13px] text-gray-900 line-clamp-1">
                {conv.lastmessage}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
