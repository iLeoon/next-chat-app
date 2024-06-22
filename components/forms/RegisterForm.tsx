'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { registerFormSchema } from '@/helpers/lib/formSchemas'
import { registerUser } from '@/helpers/api/auth/auth'
import ExternalSignInButtons from './ExternalSignInButtons'

function RegisterForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    const res = await registerUser(values)
    if (!res.success) {
      form.setError(`password`, { message: res.error.message })
      return
    }

    router.push('/')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white rounded-lg bg-gray-700 shadow-xl shadow-gray-800 p-5 w-full max-w-xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your full name"
                  className="bg-gray-800 border-gray-900 outline-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your email"
                  className="bg-gray-800 border-gray-900 outline-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Please enter your password"
                  className="bg-gray-800 border-gray-900 outline-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between flex-col gap-5">
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 mx-auto px-10"
            asChild={false}
          >
            Submit
          </Button>

          <p className="text-gray-400">
            Already have an account?,{' '}
            <Link href="/login" className="text-indigo-400 underline">
              Login
            </Link>
          </p>

          <ExternalSignInButtons />
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm
