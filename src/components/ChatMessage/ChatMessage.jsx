import React from 'react'

const ChatMessage = ({chat}) => {
    console.log(chat)
  return (
    
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
        {chat.role === "model" && <ChatBotIcon />}
        <p className="message-text">
            {chat.text}
        </p>
    </div>
  )
}

export default ChatMessage
