import React from 'react';
import { Container, TextField, Button, Grid, LinearProgress } from '@mui/material';
import ChatMessages from './ChatMessages';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import {Paper, Box, Image} from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import QRCodes from './QRCodes';


const QRSearch =()=>{

    const [search,setSearch] = useState('')
    const [drugs, setDrugs] = useState([])

    const handleSend = () => {
      axios.get('http://127.0.0.1:5000/drugs', {params: { search: search}})
      .then(res => {
        setDrugs(res.data.rows)
        console.log(res.data)
      })
      .catch(ex => {
        console.log(ex)
      })
        }

    return(
        <Container maxWidth='md' sx={{p:2}} >
      <Paper elevation={0} sx={{ borderRadius:'16px', p:1}}  >
      <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            className="custom-hidden-label"
            color="primary"
            sx={{ mb:1,mt:1, backgroundColor:'#F0F5F9', display:'flex', minWidth:'80%', borderRadius:'16px', maxHeight:'10%'}}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                    onClick={handleSend}
                  >
                    <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            focused
            // onKeyDown={handleKeyPress} 
          />
      {/* </Grid> */}
      
      </Box>

      <QRCodes drugs={drugs}/>
      </Paper>

      

    </Container>
    )
}

export default QRSearch