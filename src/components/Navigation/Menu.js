import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

//icons
import home from "../../assets/icons/home.svg";
import graduationhat from "../../assets/icons/graduationhat.svg";
import profile from "../../assets/icons/profile.svg";
import message from "../../assets/icons/message.svg";
import settings from "../../assets/icons/settings.svg";
import icon from "../../assets/icons/icon.svg";

const Menu = () => {
  return (
    <div class="menu">
      <h1 class="f"> F.</h1>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <img src={graduationhat} alt="courses" />
      <img src={profile} alt="profile" />
      <img src={message} alt="messages" />
      <img src={settings} alt="settings" />

      <div style={{ marginTop: "50px", marginBottom: "15px" }}>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Menu;
