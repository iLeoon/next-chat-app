import type { CreateMessageType, MessagePayload } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function createMessage(
  payload: CreateMessageType,
): Promise<MessagePayload> {
  try {
    const response = await fetcher.post(
      `${process.env.NEXT_PUBLIC_NEST_API_URL}/messages/create`,
      payload,
    )

    return response.data
  } catch (e) {
    throw new Error(
      `Error while creating a message for conversation ${payload.conversationId}`,
    )
  }
}
