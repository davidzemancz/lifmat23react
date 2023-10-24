import React from 'react';
import { Paper, Typography  } from '@mui/material';

const ChatMessageBubble = ({message}) => {
    return(
        <Paper
      elevation={0}
      
      sx={{
        padding: '8px',
        borderRadius: '8px',
        marginBottom: '8px',
        backgroundColor: message.isOutgoing ? 'message.out' : 'message.in',
        color: message.isOutgoing ? 'white' : 'inherit',
        marginLeft: message.isOutgoing ? 'auto' : 'inherit',
        width: '90%'
      }}
    >
      <Typography variant="body1" sx={{ wordBreak: "break-word" }}>{message.text}</Typography>
    </Paper>
    )
}

export default ChatMessageBubble