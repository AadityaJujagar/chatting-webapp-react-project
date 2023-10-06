import React from "react";
import "./chattingmainsec.css";
import voiceCallIcon from "../../assets/VcIcon.svg";
import vidCallIcon from "../../assets/vidCallIcon.svg";
import imogyIcon from "../../assets/imogyIcon.svg";
import micIcon from "../../assets/micIcon.svg";
import attachIcon from "../../assets/attachIcon.svg";
import { userMsgs } from "../../Data";
import UserDmMsgs from "../UserDmMsgs/UserDmMsgs";

function ChattingMainSec() {
  return (
    <div className="chattingMainParent">
      <div className="chattingMainHeader">
        <div className="headerLHS">
          <img src={userMsgs[0].img} alt="" />
          <div className="headerLHSinfo">
            <p>{userMsgs[0].name}</p>
            <p>Active</p>
          </div>
        </div>
        <div className="headerRHS">
          <img src={voiceCallIcon} alt="" />
          <img src={vidCallIcon} alt="" />
        </div>
      </div>
      <div className="chattingMainBox">
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
        {userMsgs.map((chatData) => (
          <UserDmMsgs chatData={chatData} key={chatData.id} />
        ))}
      </div>
      <div className="typeMsgSec">
        <input type="text" placeholder="Type your message..." />
        <div className="msgSecAttach">
          <img src={imogyIcon} alt="" />
          <img src={micIcon} alt="" />
          <img src={attachIcon} alt="" />
          <div className="iconsDivider"></div>
          <button>Send{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default ChattingMainSec;
