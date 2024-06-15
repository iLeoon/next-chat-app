import type { CreateInvitationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function createInvitation(data: CreateInvitationData) {
  try {
    await fetcher.post('/invitations/create', data)
  } catch (e) {
    throw new Error(
      `An error occured while trying to send an invitation to ${data.receiver}`,
    )
  }
}
