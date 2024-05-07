import type { CreateMessageType } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function createMessage(data: CreateMessageType) {
  try {
    await fetcher.post(
      `${process.env.NEXT_PUBLIC_NEST_API_URL}/messages/create`,
      data,
    )
  } catch (e) {
    throw new Error(
      `Error while creating a message for conversation ${data.conversationId}`,
    )
  }
}
