/* eslint-disable @typescript-eslint/naming-convention */
import React, { useContext, useEffect } from 'react'
import { useAuth, useMessages } from '@/helpers/zustand'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SendMessageForm } from '@/helpers/lib/formSchemas'
import { useMutation } from '@tanstack/react-query'
import { createMessage } from '@/helpers/api/messages/createMessage'
import { WebSocketContext } from '@/helpers/context/websocketCtx'
import { Textarea } from '@/components/ui/textarea'
import { Message } from '@/helpers/types'

type MessageFormProps = {
  conversationId: string
}
export function MessagesForm({ conversationId }: MessageFormProps) {
  const socket = useContext(WebSocketContext)
  const { mutate } = useMutation({
    mutationKey: ['create-message'],
    mutationFn: createMessage,
  })
  const user = useAuth((state) => state.user)
  const addMessage = useMessages((state) => state.addMessage)
  const form = useForm<z.infer<typeof SendMessageForm>>({
    resolver: zodResolver(SendMessageForm),
    defaultValues: { message: '' },
  })

  async function onSubmit(value: z.infer<typeof SendMessageForm>) {
    const message = { content: value.message, author: user, _id: '' }
    const data = { content: value.message, conversationId }
    addMessage(message)
    mutate(data)
    form.reset()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault()
      form.handleSubmit(onSubmit)()
    }
  }
  useEffect(() => {
    socket.on('connect', () => console.log('connected from front-end'))
    socket.on('onMessage', (data: Message) => {
      console.log(data)
      // addMessage(data)
    })
    return () => {
      socket.off('connect')
    }
  }, [addMessage, socket])
  return (
    <Form {...form}>
      <form className="rounded-lg w-[70%] mt-auto mx-auto bottom-1 p-3">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="">
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="resize-none border-0 shadow-none min-h-16 bg-black text-white focus-visible:ring-transparent"
                    {...field}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
