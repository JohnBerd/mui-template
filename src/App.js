import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ToggleMenu from './components/ToggleMenu';
import Footer from './components/Footer';
import Main from './components/Main';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
