import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ParticlesBackground from './components/ParticlesBackground';
import BackToTop from './components/BackToTop';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#10b981',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    allVariants: {
      color: '#ffffff',
    },
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      fontFamily: '"Fira Code", monospace',
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontFamily: '"Fira Code", monospace',
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Fira Code", monospace',
      fontSize: '0.875rem',
    },
    overline: {
      fontFamily: '"Fira Code", monospace',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#ffffff',
        },
        secondary: {
          color: '#ffffff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
        notchedOutline: {
          borderColor: '#ffffff',
        },
      },
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ParticlesBackground />
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          pt: { xs: 8, sm: 9 },
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          color: '#ffffff',
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </Box>
      <BackToTop />
    </MuiThemeProvider>
  );
}

export default App;
