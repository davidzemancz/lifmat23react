import React from 'react';
import { Paper, Typography  } from '@mui/material';
import ChatMessageBubble from './ChatMessageBubble';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

const ChatMessages = ({update, setLoading, setUpdate}) => {
  const scrollRef = useRef(null);

  const [messages,setMessages] = useState([]);

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

useEffect(() => {
  scrollRef.current?.scrollIntoView({behavior: 'smooth'});
},[messages]);

    return(
        <Paper
        elevation={0}
        sx={{
          boxShadow: '0px',
          // height: '90vh',
          overflowY: 'hidden',
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          // border: '1px solid #ccc',
          m:0
        }}
        fullHeight
      >
        <div sx={{ marginBottom: '8px', padding: '8px', background: '#f0f0f0', borderRadius: '8px' }}>
        <Paper
      elevation={0}
      
      sx={{
        padding: '8px',
        borderRadius: '12px',
        minWidth:'20%',
        maxWidth:'80%', 
        pl: 2, pr:2,
        marginLeft: '9%',
        backgroundColor: 'message.in',
        color: 'inherit',
        marginBottom: '15px',
        marginTop: '15px'
      }}
    >
      <Typography variant="body1" sx={{ wordBreak: "break-word" }}>Vítejte v SPC AI WIZARD pro snadné vyhledávání informací o lécích</Typography>
    </Paper>
          </div>
        {messages.map((message, index) => (
          <div key={index} sx={{ marginBottom: '8px', padding: '8px', background: '#f0f0f0', borderRadius: '8px' }}>
            <ChatMessageBubble message={message} setLoading={setLoading} setUpdate={setUpdate}></ChatMessageBubble>
          </div>
        ))}
        <div ref={scrollRef}></div>
      </Paper>
    )
}

export default ChatMessages