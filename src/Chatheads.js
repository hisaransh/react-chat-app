import React , { useState, useEffect ,useRef}  from 'react';
import './App.css';
import './Bubble.css'

const Chatheads = (({chatheadsdata,selectedid,changeSelectedid}) => {
    const [chatheadsdata1,handlechatsdata] = useState(chatheadsdata)
    const [selectedid1,handleselectedid1] = useState(selectedid)
  
  
    function changeSelectedidUtil(id){
      if(id !== selectedid1){
        handleselectedid1(id)
        changeSelectedid(id)
      }
    }
    function ToMap(){
      const mp = chatheadsdata1.friend.map( (t) =>
        <li className='chat-head-2 d-flex flex-row chatheads' style={{backgroundColor:t.id===selectedid1?"#00fff0":"#fafaf6"}}  key={t.id} onClick={() => changeSelectedidUtil(t.id)}>
          <div className='ml-2'>
            <img src={t.profilepic} height='35px'></img>
          </div>
          <div className='' style={{marginTop:'6px',marginLeft:'10px'}}>
            {t.fname}
          </div>
        </li>
      )
      return mp
    }
 
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

export default Chatheads