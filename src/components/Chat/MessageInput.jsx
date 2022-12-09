import React, {useState} from 'react';

const MessageInput = ({onSubmit}) => {
    const [message, setMessage] = useState("")
    return (
        <div>
            <textarea name="message" cols="50" rows="10" style={{resize: "both"}} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button onClick={() => onSubmit(message)}>Send</button>
        </div>
    );
};

export default MessageInput;