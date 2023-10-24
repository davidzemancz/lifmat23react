import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import ChatMessages from './ChatMessages';
import { useState } from 'react';
import axios from 'axios';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import {Paper, Box} from '@mui/material';
import { InputAdornment } from '@mui/material';

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

      function handleKeyPress(event) {
        if (event.key === 'Enter') {
          handleSend()
        }};

  return (
    <Container maxWidth='sm' sx={{p:2}} >
      <Paper elevation={0} sx={{border:'2px solid', borderColor:'primary.main', borderRadius:'8px', pt:2}} >
      <ChatMessages update={update}></ChatMessages>
      {/* <Grid container spacing={2} sx={{ marginTop: '16px' }}> */}
      <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            className="custom-hidden-label"
            color="textfield"
            sx={{ mb:1, backgroundColor:'#F0F5F9', display:'flex', minWidth:'80%', borderRadius:'16px'}}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="pls help"
            InputLabelProps={{
              shrink: false,
            }}
            InputProps={{
              style: {
                borderRadius: '16px', // Adjust the value for your desired border radius
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%', borderRadius: '8px',  }}
                    onClick={handleSend}
                  >
                    <SendRoundedIcon></SendRoundedIcon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            focused
            onKeyDown={handleKeyPress} 
          />
      {/* </Grid> */}
      
      </Box>
      </Paper>
    </Container>
  );
};

export default ChatWindow;

