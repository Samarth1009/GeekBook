import { Avatar } from "@material-ui/core";
import React from "react";
import {useState} from "react";
import styles from "./Navbar.module.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button,Menu,MenuItem } from "@material-ui/core";



const Navbar = () => {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.title}>GeekBook</h3>
      <input
        type="text"
        name="search"
        id={styles.search}
        placeholder="Search"> 
        </input>
        
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar className={styles.myavatar} />
        </Button>
        <Menu
        className="nav_dropdown"
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
         >
         
         <MenuItem className="nav_dropdown_item">Profile</MenuItem>
         <MenuItem className="nav_dropdown_item">Signup</MenuItem>
         <MenuItem className="nav_dropdown_item">Signout</MenuItem>
         </Menu>

   
    </nav>
  );
};

export default Navbar;
