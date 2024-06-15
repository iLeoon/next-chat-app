import {
  APIRespone,
  registerCredentials,
  userCredentials,
} from '@/helpers/types'
import { fetcher } from '../fetcher'

export async function loginAuth(
  loginData: userCredentials,
): Promise<APIRespone<{ message: string }>> {
  try {
    const response = await fetcher.post('/auth/login', loginData)

    return { success: true, data: response.data }
  } catch (e: any) {
    return { success: false, error: e.response.data }
  }
}

export async function registerUser(registerData: registerCredentials) {
  try {
    const response = await fetcher.post('/auth/register', registerData)

    return { success: true, data: response.data }
  } catch (e: any) {
    return { success: false, error: e.response.data }
  }
}

export async function logOut() {
  try {
    return await fetcher.get('/auth/logout')
  } catch (e: any) {
    throw new Error(
      `an Error occured while tyring to log the user out : ${e.response.data}`,
    )
  }
}
