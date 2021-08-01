import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./navbar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button, Menu, MenuItem } from "@material-ui/core";
import home from './home.png';
import user from './user.png';
import logout from './logout.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function menuToggle(){
    const toggleMenu=document.querySelector('.nav_dropdown_content');
    toggleMenu.classList.toggle('active');
  }
  return (
    <nav className="navbar">

      <h3 className="title">GeekBook</h3>

      <input type="text" name="search" id="search" placeholder="Search"></input>

      <div className="nav_dropdown">
          <Avatar  onClick={menuToggle} className="myavatar"></Avatar>

        <ul className="nav_dropdown_content">
          <li><img src={home} />Home</li>
          <li><img src={user} />Profile</li>
          <li><img src={logout} />Logout</li>
        </ul>
      </div>
      

    </nav>
  );
};

export default Navbar;
