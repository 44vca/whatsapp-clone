import React, { useState } from "react";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SelectInput from "@material-ui/core/Select/SelectInput";

import "./ChatFooter.css";

function ChatFooter() {
  const [input, setInput] = useState("");

  const sendMessage = () => {};

  return (
    <div className="chat__footer">
      <InsertEmoticonIcon />

      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => SelectInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </form>

      <MicIcon />
    </div>
  );
}

export default ChatFooter;
