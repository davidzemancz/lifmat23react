import React from 'react';
import { Paper, Typography  } from '@mui/material';
import ChatMessageBubble from './ChatMessageBubble';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const ChatMessages = ({update}) => {

  const [messages,setMessages] = useState([{text:"koureni",isOutgoing:false},{text:"curaku",isOutgoing:false}]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/messages', {})
    .then(res => {
      setMessages(res.data.messages)
        console.log(res.data)
    })
    .catch(ex => {
        console.log(ex)
    })
},[update]);
    return(
        <Paper
        elevation={3}
        sx={{
          height: '400px',
          overflowY: 'scroll',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      >
        {messages.map((message, index) => (
          <div key={index} sx={{ marginBottom: '8px', padding: '8px', background: '#f0f0f0', borderRadius: '8px' }}>
            <ChatMessageBubble message={message}></ChatMessageBubble>
          </div>
        ))}
      </Paper>
    )
}

export default ChatMessages