'use client'

import React from 'react'
import { SendInvitationForm } from '@/components/forms/SendInvitationForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function CreateConversationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          type="button"
          asChild={false}
          className="w-9 h-9 rounded-full"
        >
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[48%]">
        <DialogHeader>
          <DialogTitle>Create a conversation</DialogTitle>
          <DialogDescription>
            Enter the email of the person you want to create a conversation
            with.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <SendInvitationForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
