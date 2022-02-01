import React from "react";
import "./message.css";

const Message = ({own}) => {
    return (
      <div className={own?"message own":"message"}>
        <div className="messageTop">
          <img className="messageImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          />
            <p className="messageText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="messageBottom">1 hr ago</div>
      </div>
    );
};

export default Message;