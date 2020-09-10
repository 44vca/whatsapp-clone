import React from "react";

import ChatHeader from "./ChatHeader/ChatHeader";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatMessage from "./ChatMessage/ChatMessage";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__body">
        <ChatMessage />

        <p className="chat__message chat__reciever">
          <span className="chat__name">Sonny</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toLocaleString("ru")}
          </span>
        </p>
      </div>

      <ChatFooter />
    </div>
  );
}

export default Chat;
