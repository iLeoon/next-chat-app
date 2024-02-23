import { z } from 'zod'
import { loginFormSchema, registerFormSchema } from '@/lib/formSchemas'

export type userCredentials = z.infer<typeof loginFormSchema>
export type registerCredentials = z.infer<typeof registerFormSchema>

export type APIError = {
  message: string
}

export type APIRespone<T> =
  | { success: false; error: APIError }
  | { success: true; data: T }
