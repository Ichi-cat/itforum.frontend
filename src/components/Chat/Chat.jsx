import React, {useEffect, useState} from 'react';
import Messages from "./Messages";
import {HubConnectionBuilder} from "@microsoft/signalr";
import MessageInput from "./MessageInput";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";



const Chat = () => {
    const [messages, setMessages] = useState(["asd", "asd"]);
    const [connection, setConnection] = useState(null);
    const accessToken = useSelector(state => state.auth.token);
    const chatId = useParams().chatId?.toString();
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:5004/chat', { accessTokenFactory: () => accessToken })
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, []);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);
    connection&&connection.on('Receive', message => {
        setMessages([...messages, message])
    });
    return(
        <div>
            <Messages messages={messages}/>
            <MessageInput onSubmit={(message) => connection.invoke("Send", chatId, message)}/>
        </div>
    );
};

export default Chat;