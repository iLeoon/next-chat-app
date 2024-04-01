import { fetcher } from '../fetcher'

export async function deleteInvitation(id: string) {
  return fetcher.delete(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/invitations/delete/${id}`,
  )
}
