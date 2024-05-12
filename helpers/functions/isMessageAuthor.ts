import type { User } from '@/helpers/types'

export function isMessageAuthor(user: User, messageSender: User): boolean {
  return user.email === messageSender.email
}
