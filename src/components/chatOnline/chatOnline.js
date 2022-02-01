import React from 'react';
import './chatOnline.css';

const ChatOnline = () => {
    return (
      <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img className='chatOnlineImg'
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Jason Warner</span>
        </div>
      </div>
    );
};
export default ChatOnline;