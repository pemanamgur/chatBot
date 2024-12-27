import React from 'react'
import ChatBotIcon from './components/ChatbotIcon/ChatbotIcon'
import "./index.css"
const App = () => {
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
            <div className="message user-message">
            <ChatBotIcon />
             <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam tenetur dicta officia perspiciatis eveniet explicabo! Facere, cumque eos?
             </p>
            </div>
        </div>
        {/* Chatbot footer */}
        <div className="chat-footer">
             <form action="#" className="chat-form">
              <input type="text" placeholder='message...' className="message-input" required />
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></button>
             </form>
        </div>
      </div>
    </div>
  )
}

export default App
