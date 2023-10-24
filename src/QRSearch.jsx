import React from 'react';
import { Container, TextField, Button, Grid, LinearProgress } from '@mui/material';
import ChatMessages from './ChatMessages';
import { useState } from 'react';
import axios from 'axios';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import {Paper, Box, Image} from '@mui/material';
import { InputAdornment } from '@mui/material';


const QRComp = (qrFile) => {
    return(
        <div>
        <Box 
        component="img"
        sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
        }}
        src={qrFile}
        />
        <Button></Button>
        <Button></Button>
        </div>
    )
}

const QRSearch =()=>{

    const [name,setName] = useState('')
    const [qrFile, setQrFile] = useState()

    return(
        <Container maxWidth='md' sx={{p:2}} >
      <Paper elevation={0} sx={{border:'2px solid', borderColor:'primary.main', borderRadius:'16px', backgroundColor:'primary.main', p:1}}  >
      <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            className="custom-hidden-label"
            color="textfield"
            sx={{ mb:1,mt:1, backgroundColor:'#F0F5F9', display:'flex', minWidth:'80%', borderRadius:'16px', maxHeight:'10%'}}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Název nebo kód přípravku"
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
                    // onClick={handleSend}
                  >
                    <SendRoundedIcon></SendRoundedIcon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            focused
            // onKeyDown={handleKeyPress} 
          />
      {/* </Grid> */}
      
      </Box>
      </Paper>

      {qrFile ? <QRComp/> : <div></div>}
      
    </Container>
    )
}

export default QRSearch