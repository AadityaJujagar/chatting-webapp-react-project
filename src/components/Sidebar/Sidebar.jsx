import React from "react";
import "./sidebar.css";
import contactsChatIcon from "../../assets/chatContactsIcon.svg";
import menuIcon from "../../assets/menuIcon.svg";
import addToConIcon from "../../assets/addToConIcon.svg";
import notificationIcon from "../../assets/notificationIcon.svg";
import settingsIcon from "../../assets/settingsIcon.svg";
import contactsIcon from "../../assets/contactsIcon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <img src={contactsChatIcon} alt="" />
        <img src={menuIcon} alt="" />
        <img src={addToConIcon} alt="" />
      </div>
      <div className="sidebarBottom">
        <img src={notificationIcon} alt="" />
        <img src={settingsIcon} alt="" />
        <img src={contactsIcon} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
