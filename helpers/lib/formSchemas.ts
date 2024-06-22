/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod'

const emailSchema = z
  .string()
  .email('Invalid email address format.')
  .min(5, 'Email must be at least 5 characters long.')
  .max(255, 'Email cannot exceed 255 characters.')

const passwordSchema = z
  .string()
  .min(3, 'Password must be at least 5 characters long.')
  .max(255, 'Password cannot exceed 255 characters.')

  .regex(
    /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
    'Please type a strong password that contains numbers.',
  )

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const registerFormSchema = z.object({
  name: z
    .string()
    .min(8, 'Full name must be at least 8 characters long.')
    .max(255, 'Full name cannot exceed 255 characters.')
    .regex(
      /^[A-Za-z\s.'-]+$/,
      'Please type a valid full name with no number or special characters.',
    ),
  email: emailSchema,
  password: passwordSchema,
})

export const sendInvitationShcema = z.object({
  receiver: emailSchema,
})

export const SendMessageForm = z.object({
  message: z
    .string()
    .min(1, 'Enter a message to be sent.')
    .max(255, "Message can't exceed 255 characters."),
})
