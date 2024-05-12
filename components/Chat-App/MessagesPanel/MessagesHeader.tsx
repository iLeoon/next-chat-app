import React from 'react'
import { Conversation } from '@/helpers/types'
import { AvatarFallback, Avatar } from '@/components/ui/avatar'
import { useAuth } from '@/helpers/zustand'
import { ConversationAuthor } from '@/helpers/functions/ConversationAuthor'

type MessageHeaderProps = {
  conversation: Conversation
}

export default function MessagesHeader({ conversation }: MessageHeaderProps) {
  const authUser = useAuth((state) => state.user)
  const recipient = ConversationAuthor(authUser, conversation)
  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center gap-4 border-b p-6">
        <Avatar>
          <AvatarFallback>{recipient.name.slice(0, 2)}</AvatarFallback>
        </Avatar>

        <div className="text-foreground transition-colors hover:text-foreground">
          {conversation.recipent.name}
        </div>
      </header>
    </div>
  )
}
