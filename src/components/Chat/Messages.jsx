import React from 'react';
import MessageItem from "./MessageItem";

const Messages = ({messages}) => {
    return (
        <div>
            {messages.map(mess => <MessageItem message={mess}/> )}
        </div>
    );
};

export default Messages;