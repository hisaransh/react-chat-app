import React from 'react';
import logo from './logo.svg';
import './App.css';
import profile_pic from './images/profile_pic.png'

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
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Alice
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    John
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Sam
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Aster
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Tom
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Dexter
                </div>
              </div>
              <div className='mt-2 mb-2 chat-head-2'>
                <div className='ml-2'>
                    Dexter
                </div>
              </div>
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
