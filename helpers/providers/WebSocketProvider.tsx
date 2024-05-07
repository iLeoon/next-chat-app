/* eslint-disable import/no-extraneous-dependencies */

'use client'

import React, { ReactNode } from 'react'
import { WebSocketContext, socket } from '@/helpers/context/websocketCtx'

export function WebSocketContextProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  )
}
