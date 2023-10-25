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
    <Box sx={{p:0, m:0, overflowY: 'scroll', width: '100vv', height:'75vh'}} style={{width:'100vv', height:'75vh'}}>
      {/* <Paper style={{width:'100%'}} elevation={0} sx={{border:'2px solid', borderColor:'primary.main', borderRadius:'8px', pt:1, width:'100%'}} maxWidth={false} > */}
      <ChatMessages update={update} setLoading={setLoading} setUpdate={setUpdate}></ChatMessages>
      {/* <Grid container spacing={2} sx={{ marginTop: '16px' }}> */}
      {loading ? <LinearProgress sx={{ position: 'absolute',
            bottom: "0px",
            textAlign: 'center', left: 0, right: 0, height:'10px'}} />:<div></div>}
      <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            multiline
            position='sticky'
            maxRows={3}
            className="custom-hidden-label"
            color="primary"
            
            sx={{ mb:1,mt:1, backgroundColor:'#F0F5F9', display:'flex', minWidth:'80%', borderRadius:'16px', maxHeight:'10%', 
            position: 'fixed',
            bottom: "5%",
            textAlign: 'center'}}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Zadejte dotaz na lék, nemoc, symptom..."
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
      {/* </Paper> */}
    </Box>
  );
};

export default ChatWindow;

