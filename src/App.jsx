import React, { useState } from 'react'
import ChatBotIcon from './components/ChatbotIcon/ChatbotIcon'
import "./index.css"
import ChatForm from './components/ChatForm/ChatForm'
import ChatMessage from './components/ChatMessage/ChatMessage'

const App = () => {
   const [chatHistory , setChatHistory] = useState([]);
  //  console.log(chatHistory) 
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/* chatBot header */}
        <div className="chat-header">
           <div className="header-info">
            <ChatBotIcon />
            <h2 className='logo-text'>ChatBot</h2>
           </div> 
           <button className="material-symbols-outlined">
           keyboard_arrow_down
           </button>
        </div>
        {/* Chat body */}
        <div className="chat-body">
            <div className="message bot-message">
            <ChatBotIcon />
             <p className="message-text">
              hey there ✋ <br /> How can I help you today?
             </p>
            </div>
            {/* <ChatBotIcon /> */}
            {/* Dynamically generate a chat here. */}
            {
              chatHistory.map((chat,index)=>(
                <ChatMessage key={index} chat={chat} />
              ))
            }
            
        </div>
        {/* Chatbot footer */}
        <div className="chat-footer">
             <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  )
}

export default App
