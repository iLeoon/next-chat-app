/* eslint-disable import/no-extraneous-dependencies */
import { io } from 'socket.io-client'
import { createContext } from 'react'

export const socket = io(`${process.env.NEXT_PUBLIC_NEST_API_URL}`, {
  withCredentials: true,
})
export const WebSocketContext = createContext(socket)
