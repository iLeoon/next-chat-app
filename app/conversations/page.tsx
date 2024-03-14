import React from 'react'
import SideBar from '@/components/SideBar/NavrBar'
import ChatList from '@/components/ConversationPanel/ChatList'

function Conversation() {
  return (
    <div className="grid grid-flow-col fixed top-0 left-0 h-screen">
      <SideBar />
      <ChatList />
    </div>
  )
}

export default Conversation
