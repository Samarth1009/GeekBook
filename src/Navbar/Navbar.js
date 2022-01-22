import { Avatar } from "@material-ui/core";
import React from "react";
import "./navbar.css";
import home from "./home.png";
import user from "./user.png";
import logout from "./logout.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  function menuToggle() {
    const toggleMenu = document.querySelector(".nav_dropdown_content");
    toggleMenu.classList.toggle("active");
  }

  return (
    <nav className="navbar">
      <h3 className="title">GeekBook</h3>

      <input type="text" name="search" id="search" placeholder="Search"></input>

      <div className="nav_dropdown">
        <Avatar onClick={menuToggle} className="myavatar"></Avatar>

        <ul className="nav_dropdown_content">
          <li>
            <img src={home} />
            <Link to="/home">Home</Link>
          </li>
          <li>
            <img src={user} />
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <img src={user} />
            <Link to="/editprofile">Edit Profile</Link>
          </li>
          <li>
            <img src={logout} />
            <Link to="/Login">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
