import type { CreateInvitationData } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function createInvitation(data: CreateInvitationData) {
  try {
    await fetcher.post('/invitations/create', data)
    return { message: 'success' }
  } catch (e: any) {
    return { message: 'failed', error: e.response.data.message }
  }
}
