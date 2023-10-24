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


function App() {
  const navItems = ['Home', 'About', 'Contact'];
  return (
    <div>
    <AppBar component="nav" position="sticky">
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        koureni curaku
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: '#fff' }}>
            {item}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
    <Container className='App'>
     
      <div>
      <ChatWindow/>
      </div>
      </Container>
      </div>
  );
}

export default App;
