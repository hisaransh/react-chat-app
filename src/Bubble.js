import React , { useState, useEffect ,useRef }  from 'react';
import './Bubble.css';



const App = () => {
    return(
        <div style={{padding:'40px',height:'80vh',overflowY:'scroll',display:'flex',flexDirection:'column'}}>
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
        </div>
    )
  }
  
const Bubble = () => {
    const scrollRef = useRef();

    const scrollToBottom = () => {
        const  messageList  = scrollRef.current;
        
        messageList.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        console.log("scrolled")
    }

    useEffect(() => {
        scrollToBottom()
    },[]);

    return(
        <div ref={scrollRef} style={{height:'75vh',overflowY:'scroll',display:'flex',flexDirection:'column'}}>
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
            </div>
        </div>
    )
}
  
export default Bubble;
  