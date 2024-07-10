import React from 'react';
import './timer.css';


const MessageChildComponent = ({ message, updateMessage }) => {
  return (
    <div>
      <h1>{message}</h1>
      <button className='childButton1' onClick={updateMessage}>Child Update Message</button>
      
    </div>
  );
};

export default MessageChildComponent;
