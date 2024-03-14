import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { LuMessageSquare, LuLogOut } from 'react-icons/lu'
import { IoPersonSharp } from 'react-icons/io5'
import { FaUserGroup } from 'react-icons/fa6'
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '../ui/tooltip'

export default function SideBar() {
  return (
    <Card className="w-20 rounded-none">
      <CardContent className="flex flex-col justify-between h-screen items-center">
        <Avatar className="w-16 h-16 m-3">
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
        <div className="flex h-[40%] flex-col gap-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LuMessageSquare size={28} />
              </TooltipTrigger>
              <TooltipContent>Conversations</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <IoPersonSharp size={28} />
              </TooltipTrigger>
              <TooltipContent>Friends</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FaUserGroup size={28} />
              </TooltipTrigger>
              <TooltipContent>Groups</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <LuLogOut size={28} />
            </TooltipTrigger>
            <TooltipContent>Sign Out</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
