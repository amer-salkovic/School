import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Smerovi from './pages/Smerovi';
import Prosek from './pages/Prosek';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smerovi" element={<Smerovi />} />
            <Route path="/predmeti" element={<Prosek />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
