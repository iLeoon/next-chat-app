'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendInvitationShcema } from '@/helpers/lib/formSchemas'
import { z } from 'zod'
import { createInvitation } from '@/helpers/api/invitations/createInvitation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export function SendInvitationForm() {
  const [email, setEmail] = useState('')
  const form = useForm<z.infer<typeof sendInvitationShcema>>({
    resolver: zodResolver(sendInvitationShcema),
    defaultValues: {
      receiver: '',
    },
  })

  const { mutate } = useMutation({
    mutationKey: ['create-invitation'],
    mutationFn: createInvitation,
  })
  async function onSubmit(value: z.infer<typeof sendInvitationShcema>) {
    setEmail(value.receiver)
    mutate(value, {
      onSuccess(data) {
        console.log(data.error)
        if (data.message === 'failed') {
          return form.setError('receiver', { message: data.error })
        }
        return toast.success(
          `You have successfully sent an invitation to ${email}`,
          {
            position: 'top-center',
          },
        )
      },
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 sm:max-w-[55%]"
      >
        <FormField
          control={form.control}
          name="receiver"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" asChild={false}>
          Send Request
        </Button>
      </form>
    </Form>
  )
}
