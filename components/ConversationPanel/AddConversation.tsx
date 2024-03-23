'use client'

import React from 'react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              defaultValue="Leon@yahoo.com"
              className="col-span-3 w-64"
              type="email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" asChild={false}>
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
