/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod'
import { loginFormSchema, registerFormSchema } from '@/helpers/lib/formSchemas'

export type userCredentials = z.infer<typeof loginFormSchema>
export type registerCredentials = z.infer<typeof registerFormSchema>

export type APIError = {
  message: string
}

export type APIRespone<T> =
  | { success: false; error: APIError }
  | { success: true; data: T }

export type User = {
  name: string
  email: string
  image?: string
}

export type Message = {
  content: string[]
  author: User
}

export type conversationData = {
  _id: string
  recipent: User
  messages: Message[]
}

export type InvitationData = {
  _id: string
  sender: User
  receiver: User
}

export type CreateConversationData = {
  recipient: string
}

export type CreateInvitationData = {
  receiver: string
}
