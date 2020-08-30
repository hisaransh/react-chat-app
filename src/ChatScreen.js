import React , { useState, useEffect ,useRef}  from 'react';
import './App.css';
import './Bubble.css'
import ChatBubble from "./ChatBubble"


const ChatScreen = ( ({ChatSceenData}) => {
    const [CSData,handleCSData] = useState(ChatSceenData)
    const [newMsg,handleNewMsg] = useState("")
  
    useEffect(() => {handleCSData(ChatSceenData)}, [ChatSceenData]);
    function handleKeyDown(e){
      if (e.key === 'Enter') {
        if(newMsg != ''){
          var dic = {
            "send" : 1,
            "msg" : newMsg
          }
          var TempCSData = CSData
          TempCSData.message.push(dic)
          handleCSData(TempCSData)
          handleNewMsg("")
        }
      }
    }
  
    if(CSData === null){
      return(
        <div>
          LOADING ...
        </div>
      )
    }else{
      return(
        <>
          <div className='primarycolor2 chat-head'>
            <img src={CSData.profilepic} className="ml-2" height='50px'></img>
            <div className='ml-2' >
                <div style={{height: '30px',fontSize: '24px'}}>
                  {CSData.fname+" "}
                </div>
                <div style={{height:'30px',fontSize:'16px'}}>
                  {CSData.lastseen}
                </div>
            </div>
          </div>
          <div style={{height: '79vh',padding:'20px'}}>
            <ChatBubble CSData={CSData} />
          </div>
          <div>
            <input type='text' style={{width: '140vh'}} value={newMsg} onChange={(e)=>handleNewMsg(e.target.value)} placeholder="Press enter to send" onKeyDown={(e) => handleKeyDown(e)}></input>
          </div>
          
        </>  
      )
      }
  })


export default ChatScreen;