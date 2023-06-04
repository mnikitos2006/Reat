import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function AppMessage() {
    const [messages, setMessages] = useState([]);

    const addMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            text: text,
        };

        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <h1>Messenger App</h1>
            <MessageList messages={messages} />
            <MessageInput addMessage={addMessage} />
        </div>
    );
}

export default AppMessage;