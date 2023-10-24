import React from 'react';
import { Container, TextField, Button, Grid, LinearProgress } from '@mui/material';
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
    const [loading, setLoading] = useState(false);

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
          setUpdate(prev => prev + 1);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
        setUpdate(prev => prev + 1)
        setLoading(true);

        setText('');
        
        }
      };

      function handleKeyPress(event) {
        if (event.key === 'Enter') {
          event.preventDefault()
          handleSend()
        }};

  return (
    <Container maxWidth='md' sx={{p:2}} >
      <Paper elevation={0} sx={{border:'2px solid', borderColor:'primary.main', borderRadius:'8px', pt:1}}  >
      <ChatMessages update={update}></ChatMessages>
      {/* <Grid container spacing={2} sx={{ marginTop: '16px' }}> */}
      {loading ? <LinearProgress/>:<div></div>}
      <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            multiline
            maxRows={3}
            className="custom-hidden-label"
            color="textfield"
            sx={{ mb:1,mt:1, backgroundColor:'#F0F5F9', display:'flex', minWidth:'80%', borderRadius:'16px', maxHeight:'10%'}}
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

