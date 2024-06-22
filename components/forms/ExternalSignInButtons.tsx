'use client'

import { useRouter } from 'next/navigation'
import { FaTwitter, FaGoogle } from 'react-icons/fa'

export default function ExternalSignInButtons() {
  const router = useRouter()

  return (
    <div className="space-y-3 text-center">
      <strong className="block">OR</strong>
      <small className="text-gray-400">Sign up with</small>
      <div className="flex items-center justify-between gap-3">
        <FaGoogle
          size={25}
          onClick={() => {
            router.push(
              `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/google/login`,
            )
          }}
        />
        <FaTwitter
          size={25}
          onClick={() => {
            router.push(
              `${process.env.NEXT_PUBLIC_NEST_API_URL}/auth/twitter/login`,
            )
          }}
        />
      </div>
    </div>
  )
}
