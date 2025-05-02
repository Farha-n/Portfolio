import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    url: 'https://github.com/Farha-n',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://linkedin.com/in/farhan3181',
    color: '#0077b5',
  },
  
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://instagram.com/far_han_2',
    color: '#e4405f',
  },
];

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Tooltip title={link.name} arrow>
            <IconButton
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                backgroundColor: 'rgba(0, 255, 157, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 157, 0.2)',
                  color: link.color,
                },
              }}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocialLinks; 