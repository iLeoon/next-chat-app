import type { ConversationsType } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getConversations() {
  const response = await fetcher.get<ConversationsType[]>('/conversations')
  return response.data
}
