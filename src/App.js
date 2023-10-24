import ChatWindow from './ChatWindow';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
// import './App.css';
import "./styles.css";
import { Container } from '@mui/material';


function App() {
  return (
    <Container className='App'>
      <ChatWindow messages={["a","b"]} />
      </Container>
  );
}

export default App;
