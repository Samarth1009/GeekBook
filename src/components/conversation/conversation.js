import React from "react";
import "./conversation.css";

const Conversation = () => {
    return (
      <div className="conversation">
        <img
          className="conversationImg"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
        />
        <span className="conversationName">Jason Warner</span>
      </div>
    );
}
export default Conversation;