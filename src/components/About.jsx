import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box
        id="about"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          py: 8,
          backgroundColor: '#0a192f',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ width: '100%' }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#00ff9d',
              fontWeight: 600,
              mb: 4,
              fontSize: '2.5rem',
              pl: { xs: 2, md: 6 },
            }}
          >
            ABOUT ME
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 6,
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                flex: '1 1 60%',
                pl: { xs: 2, md: 6 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Hello! I'm <span style={{ color: '#00ff9d' }}>Farhan Farooq</span>, a passionate Full Stack Developer with a solid foundation in Computer Science and Engineering from Lovely Professional University, where I've maintained a CGPA of 7.68.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                In addition to web development, I have growing expertise in Digital Marketing and DevOps, which help me not only build applications but also deploy and promote them effectively.
              </Typography>

              <Box
                component="ul"
                sx={{
                  color: '#fff',
                  listStyleType: 'none',
                  pl: 0,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                  mt: 4,
                }}
              >
                {[
                  'C++, JavaScript, C, PHP, Java',
                  'HTML, CSS, Bootstrap, React.js',
                  'Node.js, Express.js, MongoDB, MySQL',
                  'DevOps – Git, Docker, CI/CD',
                  'Digital Marketing & SEO',
                  'Team Leadership',
                  'Problem Solving',
                  'Critical Thinking',
                ].map((tech, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      position: 'relative',
                      pl: 3,
                      color: '#94a3b8',
                      '&::before': {
                        content: '"▹"',
                        position: 'absolute',
                        left: 0,
                        color: '#00ff9d',
                      },
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                flex: '1 1 40%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  filter: 'grayscale(0.3) contrast(1.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0) contrast(1)',
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://res.cloudinary.com/ddi2gnim6/image/upload/v1744998193/WhatsApp_Image_2025-04-18_at_23.11.20_0f9c89ae_fm5bmh.jpg"
                  alt="Farhan Farooq"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 