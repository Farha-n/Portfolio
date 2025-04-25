import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  
  {
    title: 'Custom Frames Store',
    description: 'Developed an e-commerce platform for customized frames, allowing users to personalize and purchase custom-made frames. Implemented a shopping cart, checkout process, and payment integration for a smooth user experience.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/Farha-n/Custom-Frames',
    live: 'https://custom-frames-one.vercel.app/',
  },
  {
    title: 'Fitness Progress Tracker',
    description: 'A fitness web application offering personalized workout plans, health tips, and user authentication features. Designed an intuitive and responsive UI to enhance user engagement. Incorporated a BMI calculator and goal-setting feature.',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    github: 'https://github.com/Farha-n/K22AZ_Project',
    live: 'https://k22-az-project-luzoflq5s-farhans-projects-c54e4245.vercel.app/',
  },
  {
    title: 'Travel Website',
    description: 'Tripboss is a powerful search engine optimized for fast and efficient travel data retrieval. It features advanced search algorithms for enhanced accuracy and a seamless user experience. Built with React.js, Node.js, Express.js, and MongoDB for robust backend support and dynamic frontend performance.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Farha-n/Tripboss',
    live: 'https://tripboss-zeta.vercel.app/',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="xl">
      <Box
        id="projects"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ width: '100%' }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#ff69b4',
                fontFamily: 'monospace',
                mb: 2,
              }}
            >
              <CodeIcon sx={{ mr: 1, fontSize: '1rem' }} />
              projects.js
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#00ff9d',
                fontWeight: 700,
                mb: 4,
              }}
            >
              Featured Projects
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#1a1a2e',
                    borderRadius: '0.5rem',
                    p: 3,
                    height: '100%',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#ff69b4',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      mb: 3,
                      opacity: 0.9,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: '#ff69b4',
                      mb: 2,
                      fontFamily: 'monospace',
                      fontSize: '0.9rem',
                    }}
                  >
                    {'// Technologies Used'}
                  </Typography>
                  
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        sx={{
                          backgroundColor: '#16162a',
                          color: '#00ff9d',
                          px: 2,
                          py: 0.5,
                          borderRadius: '0.25rem',
                          fontSize: '0.875rem',
                          fontFamily: 'monospace',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            backgroundColor: '#1e1e35',
                          },
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        borderColor: '#ff69b4',
                        border: '1px solid',
                        borderRadius: '0.25rem',
                        px: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 105, 180, 0.1)',
                          borderColor: '#ff69b4',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        borderColor: '#00ff9d',
                        border: '1px solid',
                        borderRadius: '0.25rem',
                        px: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 157, 0.1)',
                          borderColor: '#00ff9d',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects; 