import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import ChatMessages from './ChatMessages';
import { useState } from 'react';
import axios from 'axios';

const ChatWindow = () => {

    const [text,setText] = useState('');
    const [update,setUpdate] = useState(0);

    const handleSend = () => {
        if (text != ''){
            // Create a new message object
        const newMessage = {
          text: text,
          isOutgoing: true, // Assuming this message is sent by the current user
        };
    
        axios.post('http://127.0.0.1:5000/post-message',
         newMessage)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        setText('');
        setUpdate(update+1);
        }
      };

  return (
    <Container maxWidth="sm" sx={{p:2}}>
      <ChatMessages update={update}></ChatMessages>
      <Grid container spacing={2} sx={{ marginTop: '16px' }}>
        <Grid item xs={10}>
          <TextField
            label="Type your message..."
            fullWidth
            sx={{ borderRadius: '8px' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', borderRadius: '8px' }}
            onClick={handleSend}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatWindow;

