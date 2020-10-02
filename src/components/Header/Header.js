import React from "react";
import "./Header.css";
import illustration from '../../assets/illustration.svg';

const Header = () => {
  return (
    <div class="rectangle1">
      <div class="greeting">
        <h1 class="welcomeText">Hello Josh! </h1>
        <p class="welcomeMsg"> It’s good to see you again.</p>
      </div>
      <div class="illustration">
        <img src={illustration} alt="hi" />
      </div>
    </div>
  );
};

export default Header;
