import React from 'react';
import Conversation from '../components/conversation/conversation';
import Message from '../components/message/message';
import Navbar from '../Navbar/Navbar';
import ChatOnline from '../components/chatOnline/chatOnline';
import "./Messenger.css";

const Messenger = () => {
    return (
      <>
        <Navbar />
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input
                placeholder="Search for friends"
                className="chatMenuInput"
              />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
            
        
                </div>
                <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something...."></textarea>
                    <button className="chatSubmitButton">Send</button>
                </div>
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
            </div>
          </div>
        </div>
      </>
    );
};

export default Messenger;