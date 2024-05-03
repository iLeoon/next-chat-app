'use client'

import React from 'react'
import { useMessages } from '@/helpers/zustand'
import MessageInputField from '@/components/Chat-App/MessagesPanel/InputField'

export default function ConversationMessages() {
  const { messages } = useMessages((state) => ({
    messages: state.messages,
  }))
  return (
    <>
      {messages?.map((message) => <p>{message.content}</p>)}
      <MessageInputField />
    </>
  )
}
