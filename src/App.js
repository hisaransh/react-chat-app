import React , { useState, useEffect }  from 'react';
import './App.css';
import './Bubble.css'
import profile_pic from './images/profile_pic.png'
import chat_data from './Data/chat_data.json'
import Bubble from './Bubble'

const ChatBubble = ( ({CSData}) => {
  const [chatsdata,handlechatsdata] = useState(CSData)
  console.log("CHATS DATA",chatsdata)
  useEffect(()=>{
    handlechatsdata(CSData)
  },[CSData])

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
      <div style={{padding:'10px',height:'75vh',overflowY:'scroll',display:'flex',flexDirection:'column'}}>
        <ToMap/>
              {/* <div>
                  <div className="leftone">
                      Hii How are you
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <div className="rightone">
                      I am fine
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Whats up
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Hii How are you
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <div className="rightone">
                      I am fine
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Whats up
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Hii How are you
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <div className="rightone">
                      I am fine
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Whats up
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Hii How are you
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <div className="rightone">
                      I am fine
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Whats up
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Hii How are you
                  </div>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                  <div className="rightone">
                      I am fine
                  </div>
              </div>
              <div>
                  <div className="leftone">
                      Whats up
                  </div>
              </div> */}
          </div>
      
    )
  }
})

const ChatScreen = ( ({ChatSceenData}) => {
  const [CSData,handleCSData] = useState(ChatSceenData)
  console.log("CS DATA",CSData)

  useEffect(() => {handleCSData(ChatSceenData)}, [ChatSceenData]);

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
        <div className=''>
          <input type='text' style={{width: '132vh'}}></input>
          <button> Send</button>
        </div>
      </>  
    )
    }
})

const Chatheads = (({chatheadsdata,selectedid,changeSelectedid}) => {
  const [chatheadsdata1,handlechatsdata] = useState(chatheadsdata)
  const [selectedid1,handleselectedid1] = useState(selectedid)


  function changeSelectedidUtil(id){
    if(id !== selectedid1){
      console.log(id)
      handleselectedid1(id)
      changeSelectedid(id)
    }
  }
  function ToMap(){
    const mp = chatheadsdata1.friend.map( (t) =>
      <li className='chat-head-2 d-flex flex-row chatheads' style={{backgroundColor:t.id===selectedid1?"#00fff0":"white"}}  key={t.id} onClick={() => changeSelectedidUtil(t.id)}>
        <div className='ml-2'>
          <img src={t.profilepic} height='30px'></img>
        </div>
        <div className='ml-2'>
          {t.fname}
        </div>
      </li>
    )
    return mp
  }
  console.log("SELECTED ID",selectedid1,selectedid,chatheadsdata1)
  if(chatheadsdata1 == null && selectedid1 == null){
    return(
      <li>
        No Chat Available
      </li>
    )
  }else{
    return(
        <ToMap />
    )
  }
  
})

const App = () => {
  const [selectedid,handleselectedid] = useState(1)
  const [ChatScreenData,handleChatScreenData] = useState(chat_data.friend[0])
  function changeSelectedid(id){
    handleselectedid(id)
    handleChatScreenData(chat_data.friend[parseInt(id)-1])
  }
  console.log("CHATDATA IN APP",ChatScreenData)
  return (
    <div className="container-fluid primarycolor1 alatafont d-flex align-items-stretch" style={{height:'100vh'}}>
      <div className='d-flex p-4 align-self-stretch row' style={{width:'200vh'}}>
          <div className='col-3 p-0 primarycolor4 overflow-auto border-gray'>
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

// const App = () => {
//   return(
//     <Bubble/>
//   )
// }

export default App;
