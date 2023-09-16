import React from "react";
import "./userdmmsgs.css";

function UserDmMsgs({ chatData }) {
  return (
    <div className="userDmParent">
      <img src={chatData.img} alt="" />
      <div className="msgDmContainer">
        <div className="userName">
          <p>{chatData.name}</p>
          <span>{chatData.msgTime}</span>
        </div>
        <p className="msgUser">{chatData.msgText}</p>
      </div>
    </div>
  );
}

export default UserDmMsgs;
