
import React, { useRef } from 'react'

const ChatForm = ({setChatHistory}) => {

    const inputRef = useRef();

    function handleFormSubmit(e){
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return ;
        inputRef.current.value = "";
        // console.log(userMessage)
        //update the chat histoty with user's message
        setChatHistory((history) => [...history , { role : "user" , text : userMessage}]);
    }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
              <input 
              ref={inputRef}
              type="text" placeholder='message...' className="message-input" required />
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></button>
    </form>
  )
}

export default ChatForm
