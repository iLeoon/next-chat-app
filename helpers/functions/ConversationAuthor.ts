import type { Conversation, User } from '@/helpers/types'

export function ConversationAuthor(
  user: User,
  conversation: Conversation,
): User {
  if (user.email === conversation.creator.email) {
    return conversation.recipient
  }
  return conversation.creator
}
