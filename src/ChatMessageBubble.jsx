import React from 'react';
import { Paper, Typography, Box  } from '@mui/material';
import { Link, Divider } from '@mui/material';

const MessageContent = ({message}) => {
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
        <ul>
          {message.options?.map((opt,id) => (
            <div key={id}>
            <Link href={opt.url}>{opt.name}</Link>
            </div>
          ))}
        </ul>

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
const ChatMessageBubble = ({message}) => {

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
      <MessageContent message={message}/>
    </Paper>
    </Box>
    )
}

export default ChatMessageBubble