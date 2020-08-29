import React , { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import profile_pic from './images/profile_pic.png'
import chat_data from './Data/chat_data.json'

const Chatheads = (({chatheadsdata}) => {
  const [chatheadsdata1,handlechatsdata] = useState(chatheadsdata)

  function To_map(){
    const mp = chatheadsdata1.friend.map( (t) =>
      <div className='chat-head-2 d-flex flex-row chatheads'>
        <div className='ml-2'>
          <img src={t.profilepic} height='30px'></img>
        </div>
        <div className='ml-2'>
          {t.fname}
        </div>
      </div>
    )
    return mp
  }
  if(chatheadsdata1 == null){
    return(
      <div>
        No Chat Available
      </div>
    )
  }else{
    return(
        <To_map />
    )
  }
  
})

function App() {
  return (
    <div className="container-fluid primarycolor1 alatafont d-flex align-items-stretch" style={{height:'100vh'}}>
      <div className='d-flex p-4 align-self-stretch row' style={{width:'200vh'}}>
          <div className='col-3 p-0 primarycolor4 overflow-auto border-gray'>
            <div className='chat-head primarycolor2'>
              <div className='ml-2'>
                Chats
              </div>
            </div>
            <div>
              <Chatheads chatheadsdata={chat_data} />
            </div>
          </div>
          <div className='col-9 p-0 primarycolor4 overflow-auto'>
              <div className='primarycolor2 chat-head'>
                <div className='ml-2'>
                  Alice
                </div>
              </div>
              <div style={{height: '79vh'}}>
                Saransh
              </div>
              <div className=''>
                <input type='text' style={{width: '132vh'}}></input>
                <button> Send</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
