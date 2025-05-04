// src/App.js
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme'; // uses the merged theme
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <LandingPage />
      </Router>
    </ThemeProvider>
  );
}

export default App;
