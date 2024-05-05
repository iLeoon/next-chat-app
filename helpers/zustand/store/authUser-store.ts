// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'
import { User } from '@/helpers/types'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { getAuthUser } from '@/helpers/api/users/getAuthUser'

type AuthUserStoreType = {
  user: User
  setUser: () => void
}

export const useAuth = create<AuthUserStoreType>()(
  devtools(
    persist(
      (set) => ({
        user: { name: '', email: '', image: '' },
        setUser: async () => {
          const authUser = await getAuthUser()
          set({ user: authUser })
        },
      }),
      {
        name: 'AuthenticatedUser',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
)
