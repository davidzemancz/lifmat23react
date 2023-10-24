import React from 'react';
import { Paper, Typography, Box  } from '@mui/material';
import { Link, Divider } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';



const MessageContent = ({message, setLoading, setUpdate}) => {

  const handleSend = (opt) => {
    const newMessage = {
      text: opt.name,
      isOutgoing: true,
      file: opt.file

    } // Assuming this message is sent by the current user
  
    axios.post('http://127.0.0.1:5000/post-message',
     newMessage)
    .then(function (response) {
      console.log(response);
      setUpdate(prev => prev + 1);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    });
    setUpdate(prev => prev + 1)
    setLoading(true);
    
    }

  if (message.isOutgoing){
    return(
      <div>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>{message.text}</Typography>
      </div>
    )
  }
  else if (message.options){
    return(
      <div>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>{message.text}</Typography>
        <div style={{paddingTop: 10, paddingBottom: 10}}>
          {message.options?.map((opt,id) => (
            <div key={id}>
            <Link 
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              handleSend(opt)
              }}>
                {opt.name}
            </Link>
            </div>
          ))}
      </div>
        

      </div>
    )
  }
  else{
    return(
      <div>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>{message.text}</Typography>
        {message.refs ?  <Divider sx={{fontSize:12}}>Zdroje</Divider> : <div></div>}
        {message.refs?.map((ref, id) => (
        <div key={id}>
        <Link href={ref.url} sx={{fontSize:12}}>{ref.url}</Link>
        <Typography variant="refs" sx={{ wordBreak: "break-word" }}>, {ref.info}</Typography>
        </div>
      ))}
      </div>
    )
  }
}
const ChatMessageBubble = ({message, setLoading, setUpdate}) => {

    return(
      <Box sx={{
        display: 'inline-flex',
        // flexDirection: 'column', 
        width:'100%',
        justifyContent: message.isOutgoing ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
        }}>
        <Paper
      elevation={0}
      
      sx={{
        padding: '8px',
        borderRadius: '12px',
        minWidth:'20%',
        maxWidth:'80%', 
        pl: 2, pr:2,
        marginLeft: message.isOutgoing ? 2 : 'inherit',
        backgroundColor: message.isOutgoing ? 'message.out' : 'message.in',
        color: message.isOutgoing ? 'white' : 'inherit',
        
      }}
    >
      <MessageContent message={message} setLoading={setLoading} setUpdate={setUpdate}/>
    </Paper>
    </Box>
    )
}

export default ChatMessageBubble