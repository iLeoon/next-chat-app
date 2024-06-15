import type { Conversation } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getConversationById(id: string) {
  const response = await fetcher.get<Conversation>(`/conversations/${id}`)
  return response.data
}
