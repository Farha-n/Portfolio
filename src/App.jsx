import React, { Suspense } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const ParticlesBackground = React.lazy(() => import('./components/ParticlesBackground'));
const BackToTop = React.lazy(() => import('./components/BackToTop'));

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

// Loading component
const LoadingSpinner = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SectionReveal = ({ children, delay = 0 }) => (
  <motion.div
    variants={sectionReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Box
      component={motion.div}
      style={{ scaleX }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        zIndex: 2000,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, #00ff9d, #ff69b4)',
        boxShadow: '0 0 14px rgba(0, 255, 157, 0.45)',
      }}
    />
  );
};

const MainContent = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <About />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Skills />
          </Box>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <Education />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <Projects />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <Contact />
        </SectionReveal>
        <BackToTop />
      </Box>
    </Suspense>
  );
};
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ position: 'relative' }}>
          <ParticlesBackground />
          <ScrollProgress />
          <MainContent />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
