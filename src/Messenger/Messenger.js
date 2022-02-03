import React from 'react';
import Conversation from '../components/conversation/conversation';
import Message from '../components/message/message';
import Navbar from '../Navbar/Navbar';
import ChatOnline from '../components/chatOnline/chatOnline';
import "./Messenger.css";
import axios from 'axios';
import { useState,useEffect} from 'react';
var x;
const Messenger = () => {
  const username = localStorage.getItem("userk");
   
   const [conversations, setConversations] = useState([]);
 
   useEffect(() => {
     async function  getConversations () {
          const data ={
            username: username,
          }
          try {
            await axios
              .post("http://localhost:8000/getUser", data)
              .then( async (response) => {
                const id=response.data._id;
                x = response.data._id;
                //  console.log(x);
                  const res = await axios.get(
                    "http://localhost:8000/conversations/" + id
                  );
                  // console.log(res);
                  setConversations(res.data);
              })
              .catch((error) => {
                {
                  alert("Error");
                }
                console.log(error);
              });
          } catch (error) {
            console.log("error");
          }
         
  
    };
    getConversations();
    
   },[x]);
    
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
             
              {conversations.map((c) => (
                  <Conversation conversation={c} currentUser={x} />
           
              ))}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message />
                <Message />
                <Message />
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something...."
                ></textarea>
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