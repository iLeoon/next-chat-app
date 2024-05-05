import type { User } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getAuthUser(): Promise<User> {
  try {
    const response = await fetcher.get<User>(
      `${process.env.NEXT_PUBLIC_NEST_API_URL}/users/authorized/user`,
    )
    return response.data
  } catch (e: any) {
    return e.response.data
  }
}
