import React from "react";
import "./homepage.css";
import ContactsBar from "../components/ContactsBar/ContactsBar";
import ChattingMainSec from "../components/ChattingMainSec/ChattingMainSec";
import Sidebar from "../components/Sidebar/Sidebar";

function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <ContactsBar />
      <ChattingMainSec />
    </div>
  );
}

export default Homepage;
