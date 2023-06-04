import React from 'react';

function MessageList({ messages }) {
    return (
        <ul>
            {messages.map((message) => (
                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
    );
}

export default MessageList;