import { InvitationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getInvitations() {
  const response = await fetcher.get<InvitationData[]>(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/requests/fetch`,
  )

  return response.data
}
