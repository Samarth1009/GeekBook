import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./navbar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button, Menu, MenuItem } from "@material-ui/core";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="navbar">

      <h3 className="title">GeekBook</h3>

      <input type="text" name="search" id="search" placeholder="Search"></input>

      <div className="nav_dropdown">
          <Avatar className="myavatar"></Avatar>

        <ul className="nav_dropdown_content">
          <li>Home</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
      

    </nav>
  );
};

export default Navbar;
