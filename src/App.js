import React , { useState, useEffect ,useRef}  from 'react';
import './App.css';
import './Bubble.css'
import chat_data from './Data/chat_data.json'
import Chatheads from "./Chatheads"
import ChatScreen from "./ChatScreen"

const App = () => {
  const [selectedid,handleselectedid] = useState(1)
  const [ChatScreenData,handleChatScreenData] = useState(chat_data.friend[0])
  function changeSelectedid(id){
    handleselectedid(id)
    handleChatScreenData(chat_data.friend[parseInt(id)-1])
  }
  return (
    <div className="container-fluid primarycolor1 alatafont d-flex align-items-stretch" style={{height:'100vh'}}>
      <div className='d-flex p-4 align-self-stretch row' style={{width:'200vh'}}>
          <div className='col-3 p-0 primarycolor4 overflow-auto' style={{borderRight:'0.5px solid white'}}>
            <div className='chat-head primarycolor2'>
              <div className='ml-2'>
                Chats
              </div>
            </div>
            <ul style={{padding:"0",listStyleType:"none"}}>
              <Chatheads chatheadsdata={chat_data} selectedid={selectedid} changeSelectedid={changeSelectedid} />
            </ul>
          </div>
          <div className='col-9 p-0 primarycolor4'>
              <ChatScreen ChatSceenData={ChatScreenData}/>
          </div>
      </div>
    </div>
  );
}

export default App;
