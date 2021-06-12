// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar/navbar.js";
// import Login from "./Login/login.js";
// import Profile from './Profile/profile.js'
import Home from "./Home/Home";
import Chat from "./Home/Chats/Chat";
import { useState } from "react";


function App() {
  const [chat_show, setChat_show] = useState(null);
  return (
    <div className="app">
      {/* <Login /> */}
      <Navbar />
      <Home />
      <Chat
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
        Chat a Geek
      </div>
    </div>
  );
}

export default App;
