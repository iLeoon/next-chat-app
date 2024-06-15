import { InvitationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getInvitations() {
  const response = await fetcher.get<InvitationData[]>(`/invitations`)

  return response.data
}
