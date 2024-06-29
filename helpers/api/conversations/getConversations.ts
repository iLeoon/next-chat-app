import type { Conversation } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getConversations() {
  const response = await fetcher.get<Conversation[]>('/conversations')
  return response.data
}
