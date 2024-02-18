'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FaTwitter, FaGoogle } from 'react-icons/fa'

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
import { loginFormSchema } from '@/lib/formSchemas'
import Link from 'next/link'
import { loginAuth } from '@/helpers/api/auth/localAuth'
import { useRouter } from 'next/navigation'
import { isAxiosError } from 'axios'

function LoginForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      const res = await loginAuth(values)
      if (res.status === 201) {
        router.push('/')
      }
    } catch (e) {
      // ensuring it's a server error
      if (isAxiosError(e)) {
        console.log(e.response?.data.message)
        form.setError(`email`, { message: e.response?.data.message })
        return
      }
      // otherwise
      throw new Error('something went wrong')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white rounded-lg bg-gray-700 shadow-xl shadow-gray-800 p-5 w-full max-w-xl"
      >
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
            Don&apos;t have an account?,{' '}
            <Link href="/register" className="text-indigo-400 underline">
              Register
            </Link>
          </p>

          <div className="space-y-3 text-center">
            <strong className="block">OR</strong>
            <small className="text-gray-400">Sign up with</small>
            <div className="flex items-center justify-between gap-3">
              <FaGoogle
                size={25}
                onClick={() => {
                  router.push(
                    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/google/login`,
                  )
                }}
              />
              <FaTwitter
                size={25}
                onClick={() => {
                  router.push(
                    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/twitter/login`,
                  )
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
