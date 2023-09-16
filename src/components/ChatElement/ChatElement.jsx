import React from "react";
import "./chatelement.css";

function ChatElement({ data }) {
  return (
    <div className="conChatElement">
      <img className="conChatAvatar" src={data.img} alt="" />
      <div className="conUserSec">
        <div className="conUserHeader">
          <p className="conUserName">{data.name}</p>
          <span className="lastMsgTime"> {data.msgTime}pm</span>
        </div>
        <p className="conUserMsg">{data.msgText}</p>
      </div>
    </div>
  );
}

export default ChatElement;
