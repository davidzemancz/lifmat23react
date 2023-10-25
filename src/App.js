import ChatWindow from './ChatWindow';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
// import './App.css';
import "./styles.css";
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import QRSearch from './QRSearch';
import { useState } from 'react';


function App() {
  const navItems = ['AI help', 'QR kódy'];
  const [current,setCurrent] = useState("ai")
  const [comp,setComp] = useState(<ChatWindow/>)

  const handleAppSwitch = (next) => {
    if(next == "ai" && current == "qr") {setComp(<ChatWindow/>); setCurrent("ai")}
    else if(next=="qr" && current == "ai") {setComp(<QRSearch/>); setCurrent("qr")}
      }

  return (
    <Container sx={{p:0, m:0, overflow: 'hidden',display: "flex",
    flexDirection: "column",}} maxWidth={false} disableGutters >
    <AppBar component="nav" position="sticky">
    <Toolbar>
      <Typography
        variant="name"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        SPC AI WIZARD
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button sx={{ color: '#fff', fontSize:20 }} >
            AI help
          </Button>
          <Button sx={{ color: '#fff', fontSize:20 }} >
            QR kódy
          </Button>
        
      </Box>
    </Toolbar>
  </AppBar>
      <ChatWindow/>
      
      </Container>
  );
}

export default App;
