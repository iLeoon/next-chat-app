import { loginFormSchema, registerFormSchema } from '@/lib/formSchemas'
import { z } from 'zod'

export type userCredentials = z.infer<typeof loginFormSchema>
export type registerCredentials = z.infer<typeof registerFormSchema>

// type ReplaceKeys<S, K extends keyof S> = {
//   [P in keyof S as K extends 'fullName' ? 'name' : P]: S[P] & {
//     [V in Exclude<keyof S, K>]: S[V]
//   }
