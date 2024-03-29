/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */

import React from 'react'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useQuery } from '@tanstack/react-query'
import { getAuthConversation } from '@/helpers/api/conversations/getConversations'
import { Card, CardContent } from '../../ui/card'
import { Avatar } from '../../ui/avatar'

export default function Conversations() {
  const { data } = useQuery({
    queryKey: ['get-conversations'],
    queryFn: async () => getAuthConversation(),
  })
  return (
    <>
      {data?.map((conv) => (
        <Card className="border-none my-8 shadow-none" key={conv._id}>
          <CardContent className="flex flex-row items-center justify-start gap-4 p-0">
            <div className="">
              <Avatar className=" bg-cyan-900 w-12 h-12">
                <AvatarImage src={`${conv.recipent.image}`} />
                <AvatarFallback className="flex items-center justify-center h-full w-full">
                  {conv.recipent.name.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="pb-2 inline-block">
              <h1 className="text-lg">{conv.recipent.name}</h1>
              <p className="text-[13px] text-gray-900 line-clamp-1">done..</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
