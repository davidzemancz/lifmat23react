import ChatWindow from './ChatWindow';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8AC4D0', // A pastel blue color for primary
    },
    secondary: {
      main: '#FF85A2', // A pink color for secondary (you can adjust this secondary color as needed)
    },
    background: {
      default: '#F0F5F9', // A light pastel blue background
      paper: '#FFFFFF', // White paper background
    },
    message: {
      out:'#8AC4D0',
      in:'#F0F5F9',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change the default font family if needed
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none', // Prevent uppercase text in buttons
      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatWindow messages={["a","b"]} />
  </ThemeProvider>
  );
}

export default App;
