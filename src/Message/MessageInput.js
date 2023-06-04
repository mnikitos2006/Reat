import React, { useState } from 'react';

function MessageInput({ addMessage }) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addMessage(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    );
}

export default MessageInput;