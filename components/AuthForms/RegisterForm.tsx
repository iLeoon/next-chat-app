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
import { registerFormSchema } from '@/lib/formSchemas'
import Link from 'next/link'

function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white rounded-lg bg-gray-700 shadow-xl shadow-gray-800 p-5 w-full max-w-xl"
      >
        <FormField
          control={form.control}
          name="fullName"
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
          >
            Submit
          </Button>

          <p className="text-gray-400">
            Already have an account?,{' '}
            <Link href="/login" className="text-indigo-400 underline">
              Login
            </Link>
          </p>

          <div className="space-y-3 text-center">
            <strong className="block">OR</strong>
            <small className="text-gray-400">Sign up with</small>
            <div className="flex items-center justify-between gap-3">
              <FaGoogle size={25} />
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm
