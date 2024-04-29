'use client'

import React from 'react'
import { Button } from '../../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog'
import { SendInvitationForm } from './SendInvitationForm'

export function AddConversation() {
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a conversation</DialogTitle>
          <DialogDescription>
            Enter the email of whoever you want to create a conversation with.
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
