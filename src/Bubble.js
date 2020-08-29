import React , { useState, useEffect }  from 'react';
import './Bubble.css';



const App = () => {
    return(
        <div style={{padding:'20px'}}>
            <div style={{width:'100vh'}}>
            <div className="leftone">
                Hii How are you
            </div>
            </div>
            <div style={{width:'100vh'}}>
            <div className="rightone">
                I am fine
            </div>
            </div>
            <div className="leftone">
                Whats up
            </div>
            <div className="leftone">
                Why are you not replying
            </div>
            <div className="rightone">
                Sorry was busy
            </div>
        </div>
    )
  }
  
  export default App;
  