import React from "react";
import "./contactsbar.css";
import editPencil from "../../assets/editPencil.svg";
import { userChatData } from "../../Data";
import ChatElement from "../ChatElement/ChatElement";

function ContactsBar() {
  return (
    <div className="contactsBar">
      <div className="conChatHeader">
        <p>Recent Messages</p>
        <img src={editPencil} alt="" />
      </div>
      <div className="chatStatus">
        <p>Chat</p>
      </div>
      {/* chatElement component mapped */}
      <div className="chatConList">
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
        {userChatData.map((data) => (
          <ChatElement data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default ContactsBar;
