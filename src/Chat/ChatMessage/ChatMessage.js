import React from "react";
import "./ChatMessage.css";

function ChatMessage() {
  return (
    <div>
      <p className="chat__message">
        <span className="chat__name">Sonny</span>
        This is a message
        <span className="chat__timestamp">
          {new Date().toLocaleString("ru")}
        </span>
      </p>
    </div>
  );
}

export default ChatMessage;
