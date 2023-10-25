import React from 'react';
import { Container, TextField, Button, Grid, LinearProgress } from '@mui/material';
import ChatMessages from './ChatMessages';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import {Paper, Box, Stack, Link} from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const QRComp = ({drug}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `qr_code_${drug.KOD_SUKL}.png`;
        link.href = `./qrcodes/qr_code_${drug.KOD_SUKL}.png`;
        link.click();
      };

    
      
    return(
        <Box display="flex" justifyContent="center" alignItems="center">
        
        <Card sx={{ minWidth:'90vh',m:2, borderColor:'primary.main', borderRadius:'16px'}} variant="outlined" >
            <CardHeader sx={{
      display: "flex",
      flex: 1,
    }}
           title={ <Typography sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}>{drug.NAZEV}, {drug.KOD_SUKL}, {drug.SILA}, {drug.BALENI}</Typography>}
        action={<IconButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            
          >
            <ExpandMoreIcon />
          </IconButton>}>
            </CardHeader>
    
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{
      display: "flex", m:0,p:0
    }}>
        <Box 
        component="img"
        sx={{
            height: 250,
            width: 250,
            m:0, p:0
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
        }}
        src={`./qrcodes/qr_code_${drug.KOD_SUKL}.png`}
        />
        <Stack spacing={2} sx={{m:2, p:2}}>
        <Link style={{ textDecoration: 'none' }} href={"mailto:"+""+"?subject="+"QR kód "+  drug.NAZEV + "&body="+ ""}><Button variant="contained" sx={{minWidth:'20vh'}}>Sdílet</Button></Link>
        <Button variant="contained" onClick={onDownload}>Stáhnout</Button>
        </Stack>
        </CardContent>
      </Collapse>
    </Card>

    </Box>
    )
}

const QRCodes = ({drugs}) => {
    return(
        <div>
        {drugs?.map((drug,id) => (
            <QRComp drug={drug} key={id}/>
            
        )
            )}
        </div>
    )

}

export default QRCodes