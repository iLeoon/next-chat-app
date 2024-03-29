import type { conversationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getConversations() {
  const response = await fetcher.get<conversationData[]>(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/conversations`,
  )
  return response.data
}
