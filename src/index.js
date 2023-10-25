import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#3ba6bc', // A pastel blue color for primary
    },
    secondary: {
      main: '#FF85A2', // A pink color for secondary (you can adjust this secondary color as needed)
    },
    background: {
      default: '#F0F5F9', // A light pastel blue background
      paper: '#FFFFFF', // White paper background
    },
    textfield:{
      main: '#F0F5F9'
    },
    message: {
      out:'#3ba6bc',
      in:'#F0F5F9',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Change the default font family if needed
    refs:{
      fontSize: 12,
      color: '#3ba6bc'
    },
    name:{
      fontSize: 24,
      color: '#fff'
    }

  },
  components: {
    MuiButton: {
      styleOverrides: {
      root: {
        textTransform: 'none', // Prevent uppercase text in buttons
      },
      contained: {
        color: 'white', // Set the text color to white for contained buttons
      },
    },
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
