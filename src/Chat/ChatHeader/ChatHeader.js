import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chat__header">
      <Avatar />
      <div className="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last seen at ...</p>
      </div>

      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
