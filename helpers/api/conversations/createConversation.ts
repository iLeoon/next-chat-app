import type { CreateConversationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function createConversation(data: CreateConversationData) {
  try {
    await fetcher.post('/conversations/create', data)
  } catch (e) {
    throw new Error(`Error while creating a conversation for ${data.recipient}`)
  }
}
