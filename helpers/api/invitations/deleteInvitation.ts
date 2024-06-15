import { fetcher } from '../fetcher'

export async function deleteInvitation(id: string) {
  return fetcher.delete(`/invitations/delete/${id}`)
}
