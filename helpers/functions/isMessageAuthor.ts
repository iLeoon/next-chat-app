import type { User } from '@/helpers/types'

export function isMessageAuthor(
  user: User,
  messageSenderEmail: string,
): boolean {
  return user.email === messageSenderEmail
}
