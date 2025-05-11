import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Hero = () => {
  const handleDownloadCV = () => {
    // Google Drive direct download link format
    // Convert sharing URL to direct download URL
    const fileId = "1lgAU63WI2NqXhEa3jCmnV4yDtsjQkld0";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    window.open(directDownloadUrl, '_blank');
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          py: 8,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '3.5rem',
                fontWeight: 700,
                color: 'white',
                mb: 2,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Hello,
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: '3.5rem',
                fontWeight: 700,
                mb: 2,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              This is{' '}
              <Box
                component="span"
                sx={{
                  color: '#ff69b4',
                  fontWeight: 700,
                }}
              >
                FARHAN FAROOQ
              </Box>
              , I'm a
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: '3.5rem',
                fontWeight: 700,
                mb: 4,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Professional{' '}
              <Box
                component="span"
                sx={{
                  color: '#00ff9d',
                  fontWeight: 700,
                }}
              >
                Software Developer
              </Box>
              .
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <IconLink href="https://github.com/Farha-n" icon={<GitHubIcon />} />
              <IconLink href="https://linkedin.com/in/farhan3181" icon={<LinkedInIcon />} />
              <IconLink href="https://instagram.com/far_han_2" icon={<InstagramIcon />} />
              <IconLink href="mailto:farhanfarooq786000@gmail.com" icon={<GoogleIcon />} />
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                sx={{
                  borderColor: '#1a1a1a',
                  color: 'white',
                  borderRadius: '2rem',
                  px: 4,
                  py: 1,
                  fontFamily: "'JetBrains Mono', monospace",
                  '&:hover': {
                    borderColor: '#00ff9d',
                    backgroundColor: 'rgba(0, 255, 157, 0.1)',
                  },
                }}
              >
                CONTACT ME
              </Button>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadCV}
                sx={{
                  backgroundColor: '#ff69b4',
                  color: 'white',
                  borderRadius: '2rem',
                  px: 4,
                  py: 1,
                  fontFamily: "'JetBrains Mono', monospace",
                  '&:hover': {
                    backgroundColor: '#ff69b4cc',
                  },
                }}
              >
                GET RESUME
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Right Section - Code Editor */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(-45deg, #1a1a2e, #16162a, #2a1a3a, #1a2a3a)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite',
                '@keyframes gradient': {
                  '0%': {
                    backgroundPosition: '0% 50%'
                  },
                  '50%': {
                    backgroundPosition: '100% 50%'
                  },
                  '100%': {
                    backgroundPosition: '0% 50%'
                  },
                },
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Code Editor Header */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #16162a 0%, #0f0f1a 100%)',
                  p: 1,
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </Box>

              {/* Code Content */}
              <Box sx={{ p: 3, fontFamily: "'Fira Code', monospace", fontSize: '1rem', color: 'white' }}>
                <Typography component="pre" sx={{ color: '#ff69b4', fontFamily: 'inherit' }}>
                  const
                </Typography>
                <Typography component="pre" sx={{ fontFamily: 'inherit' }}>
                  {`coder = {
  name: 'Farhan Farooq',
  skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS',
          'MySql', 'MongoDB', 'Docker', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

const IconLink = ({ href, icon }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: 'white',
      '&:hover': {
        color: '#00ff9d',
      },
    }}
  >
    {icon}
  </Box>
);

export default Hero; 