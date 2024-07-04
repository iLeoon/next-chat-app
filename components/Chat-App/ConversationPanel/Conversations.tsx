/* eslint-disable no-underscore-dangle */

import React from 'react'
import { AvatarFallback } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { ConversationAuthor } from '@/helpers/functions/ConversationAuthor'
import { useAuth, useConversations } from '@/helpers/zustand'

export default function Conversations() {
  const authUser = useAuth((state) => state.user)
  const conversations = useConversations((state) => state.conversations)
  return (
    <>
      {conversations.map((conversation) => (
        <Link
          href={`/chat/conversations/${conversation._id}`}
          key={conversation._id}
        >
          <Card
            className="border-none my-8 shadow-none hover:cursor-pointer hover:bg-slate-300 p-3"
            key={conversation._id}
          >
            <CardContent className="flex flex-row items-center justify-start gap-4 p-0">
              <div className="">
                <Avatar className=" bg-cyan-900 w-12 h-12">
                  <AvatarFallback className="flex items-center justify-center h-full w-full">
                    {ConversationAuthor(authUser, conversation)
                      .name.slice(0, 1)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="pb-2 inline-block">
                <h1 className="text-lg">
                  {ConversationAuthor(authUser, conversation).name}
                </h1>
                <p className="text-[13px] text-gray-900 line-clamp-1">
                  {conversation.lastMessageSent?.content}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}
