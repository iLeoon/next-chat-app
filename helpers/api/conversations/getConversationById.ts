import type { Conversation } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getConversationById(id: string) {
  const response = await fetcher.get<Conversation>(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/conversations/${id}`,
  )
  return response.data
}
