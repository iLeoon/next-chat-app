import axios, { type AxiosRequestConfig } from 'axios'
import { registerCredentials, userCredentials } from '../../types'

const config: AxiosRequestConfig = { withCredentials: true }

export async function loginAuth(loginData: userCredentials) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/login`,
    loginData,
    config,
  )
  return response
}

export async function registerUser(registerData: registerCredentials) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/register`,
    registerData,
    config,
  )
  return response
}
