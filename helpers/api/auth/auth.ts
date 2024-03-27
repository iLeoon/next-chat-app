import { APIRespone, registerCredentials, userCredentials } from '../../types'
import { fetcher } from '../fetcher'

export async function loginAuth(
  loginData: userCredentials,
): Promise<APIRespone<{ message: string }>> {
  try {
    const response = await fetcher.post(
      `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/login`,
      loginData,
    )

    return { success: true, data: response.data }
  } catch (e: any) {
    return { success: false, error: e.response.data }
  }
}

export async function registerUser(registerData: registerCredentials) {
  try {
    const response = await fetcher.post(
      `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/register`,
      registerData,
    )

    return { success: true, data: response.data }
  } catch (e: any) {
    return { success: false, error: e.response.data }
  }
}
