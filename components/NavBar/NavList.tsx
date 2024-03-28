'use client'

import React from 'react'
import { MessageSquare, Mail, User, Users, LogOut } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Nav } from '../ui/nav'
import { Avatar, AvatarFallback } from '../ui/avatar'

export default function NavList() {
  return (
    <div className="border flex flex-col justify-between items-center py-4">
      <div>
        <Avatar className="w-16 h-16 m-3 rounded-full">
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
      </div>

      <div className="">
        <Nav
          isCollapsed
          links={[
            {
              title: 'Conversations',
              label: '972',
              icon: MessageSquare,
              variant: 'default',
              href: '/chat/conversations',
            },
            {
              title: 'Friends',
              label: '342',
              icon: User,
              variant: 'ghost',
              href: '/chat/',
            },
            {
              title: 'Groups',
              label: '128',
              icon: Users,
              variant: 'ghost',
              href: '/components/ConversationPanel/ChatList.tsx',
            },
            {
              title: 'Inbox',
              label: '8',
              icon: Mail,
              variant: 'ghost',
              href: '/chat/inbox',
            },
          ]}
        />
      </div>

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <LogOut />
            <span className="sr-only">Log Out</span>
          </TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-4">
            <p>Log Out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
