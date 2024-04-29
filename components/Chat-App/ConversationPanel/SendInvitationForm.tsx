'use client'

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
import { sendInvitationShcema } from '@/lib/formSchemas'
import { z } from 'zod'
import { createInvitation } from '@/helpers/api/invitations/createInvitation'

export function SendInvitationForm() {
  const form = useForm<z.infer<typeof sendInvitationShcema>>({
    resolver: zodResolver(sendInvitationShcema),
    defaultValues: {
      receiver: '',
    },
  })

  async function onSubmit(value: z.infer<typeof sendInvitationShcema>) {
    await createInvitation(value)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-72">
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
