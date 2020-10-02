import React from "react";
import Searchbar from "./Searchbar";
import notification from "../../assets/icons/notification.svg";
import downarrow from "../../assets/icons/downarrow.svg";

const Navbar = () => {
  return (
    <div class="flex flex-row items-center justify-between">
      <Searchbar />

      <img src={notification} alt="notification" />

      <div class="flex flex-row items-center dropdown">
        <img
          class="profilephoto"
          src="/assets/images/dp.png"
          alt="profilephoto"
        />
        <img src={downarrow} alt="downarrow" />
      </div>
    </div>
  );
};

export default Navbar;
