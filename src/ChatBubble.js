import React , { useState, useEffect ,useRef}  from 'react';
import './App.css';
import './Bubble.css'
import { animateScroll } from "react-scroll";

const ChatBubble = ( ({CSData}) => {
  const [chatsdata,handlechatsdata] = useState(CSData)


  useEffect(()=>{
    handlechatsdata(CSData)
    
  },[CSData])
  
  useEffect(()=>{
    scrollToBottom()
  })

  function scrollToBottom(){
    animateScroll.scrollToBottom({
        containerId: "ContainerElementID",
        duration: 50,
    });
  }

  function ToMap(){
    const mp = chatsdata.message.map((x) => (
      <div>
        {x.send==0
        ? <div className="leftone">{x.msg}</div>
        : <div style={{display:'flex',justifyContent:'flex-end'}}><div className="rightone">{x.msg}</div></div>
        }
      </div>
    )
    )
    return mp
  }

  if(chatsdata == null || chatsdata.message == null || chatsdata.message.length == 0){
    return(
      <div>
        No chats
      </div>
    )
  }else{
    return(
      <div id="ContainerElementID" style={{padding:'10px',height:'75vh',overflowY:'scroll',display:'flex',flexDirection:'column'}}>
        <ToMap/>        
      </div>
      
    )
  }
})

export default ChatBubble;