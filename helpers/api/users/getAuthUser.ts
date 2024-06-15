import type { User } from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function getAuthUser(): Promise<User> {
  try {
    const response = await fetcher.get<User>('/users/authorized/user')
    return response.data
  } catch (e: any) {
    return e.response.data
  }
}
