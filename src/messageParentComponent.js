import React, { useState } from "react";
import MessageChildComponent from './messageChildComponent';
import './timer.css';


const MessageParentComponet = () => {
    const [message, setMessage] = useState('First Message');

    const updateMessage = () => {
        setMessage('Updated Message');

    };

    return(
        <>
            <div className="messageContainer">
                <MessageChildComponent message={message} updateMessage={updateMessage}/>
                <button onClick={updateMessage}>Update Message</button>
            </div>
        </>
    );
};

export default MessageParentComponet;