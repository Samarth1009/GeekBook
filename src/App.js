// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
// import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import Home from "./Home/Home";
import Chat from "./Home/Chats/Chat";
import { useState } from "react";
import Signup from "./Login/Signup.js";

function App() {
  const [chat_show, setChat_show] = useState(null);
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Signup />
      {/* <Login/> */}
      {/* <Home /> */}
      {/* <Profile/> */}
      {/* <Chat
        show={chat_show}
        handleClose={() => {
          setChat_show(null);
        }}
      />
      <div
        className="chat_open_button"
        style={chat_show && { display: "none" }}
        onClick={() => {
          setChat_show(true);
        }}
      >
        Chat a Geek */}
      {/* </div> */}
    </div>
  );
}

export default App;
