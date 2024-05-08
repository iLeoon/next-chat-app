import { CornerDownLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
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
import { useContext, useEffect } from 'react'
import { WebSocketContext } from '@/helpers/context/websocketCtx'

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
    defaultValues: { messages: '' },
  })

  async function onSubmit(value: z.infer<typeof SendMessageForm>) {
    const message = { content: value.messages, author: user }
    const data = { content: value.messages, conversationId }
    addMessage(message)
    mutate(data)
  }

  useEffect(() => {
    socket.on('connect', () => console.log('connected from front-end'))
    socket.on('onMessage', (data) => {
      console.log(data)
    })
    return () => {
      socket.off('connect')
    }
  }, [])
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring mt-auto"
      >
        <FormField
          control={form.control}
          name="messages"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex">
                  <Textarea
                    id="message"
                    placeholder="send a message"
                    className="resize-none border-0 shadow-none focus-visible:ring-0"
                    {...field}
                  />
                  <div className="flex items-center p-3 pt-0">
                    <Button type="submit" size="sm" asChild={false}>
                      Send Message
                      <CornerDownLeft className="size-3.5" />
                    </Button>
                  </div>
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
