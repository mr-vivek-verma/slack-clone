import userEvent from "@testing-library/user-event";
import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { HelpOutline } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="Vivek Verma" src="" />
        <AccessTimeIcon />
        {/* {Avtar for logged in user} */}
        {/* {Time icon} */}
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search for vivek profile" />
        {/* {input} */}
      </div>
      <div className="header_right">
        <HelpOutline />
        {/* {help icons} */}
      </div>
    </div>
  );
}

export default Header;
