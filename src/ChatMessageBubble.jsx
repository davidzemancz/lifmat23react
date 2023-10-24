import React from 'react';
import { Paper, Typography, Box  } from '@mui/material';
import { Link, Divider } from '@mui/material';

const ChatMessageBubble = ({message}) => {

    return(
      <Box sx={{
        display: 'inline-flex',
        // flexDirection: 'column', 
        width:'100%',
        marginLeft: message.isOutgoing ? 'auto' : 'inherit',
        justifyContent: message.isOutgoing ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
        }}>
        <Paper
      elevation={0}
      
      sx={{
        padding: '8px',
        borderRadius: '8px',
        minWidth:'20%',
        maxWidth:'80%', 
        backgroundColor: message.isOutgoing ? 'message.out' : 'message.in',
        color: message.isOutgoing ? 'white' : 'inherit',
        
      }}
    >
      <Typography variant="body1" sx={{ wordBreak: "break-word" }}>{message.text}</Typography>
      {message.isOutgoing ? <div></div> : <Divider sx={{fontSize:12}}>Zdroje</Divider>}
      {message.refs?.map((ref, id) => (
        <div key={id}>
        <Link href={ref.url} sx={{fontSize:12}}>{ref.url}</Link>
        <Typography variant="refs" sx={{ wordBreak: "break-word" }}>, {ref.info}</Typography>
        </div>
      ))}
    </Paper>
    </Box>
    )
}

export default ChatMessageBubble