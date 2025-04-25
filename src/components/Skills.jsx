import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Next.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
          name: 'MaterialUI',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
        },
        {
          name: 'Bootstrap',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        }
      ]
    },
    {
      title: "Backend",
      skills: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Express',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Firebase',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
        {
          name: 'Go',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
        },
        {
          name: 'Nginx',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        },
        
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'VS Code',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          name: 'Figma',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        },
        {
          name: 'AWS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        },
        {
          name: 'Linux',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
        {
          name: 'Redux',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        },
        {
          name: 'Webpack',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
        }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        {
          name: 'Leadership',
          logo: '🎯',
        },
        {
          name: 'Communication',
          logo: '💬',
        },
        {
          name: 'Problem Solving',
          logo: '🔍',
        },
        {
          name: 'Team Work',
          logo: '👥',
        },
        {
          name: 'Time Management',
          logo: '⏰',
        },
        {
          name: 'Adaptability',
          logo: '🔄',
        },
        {
          name: 'Critical Thinking',
          logo: '🧠',
        },
        {
          name: 'Project Management',
          logo: '📊',
        }
      ]
    }
  ];

  return (
    <Container 
      maxWidth={false}
      sx={{
        maxWidth: '1800px',
        px: { xs: 2, md: 4 }
      }}
    >
      <Box
        id="skills"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          backgroundColor: '#0a192f',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 600,
              mb: 4,
              fontSize: { xs: '2rem', md: '2.25rem' },
              textAlign: 'center',
            }}
          >
            Skills
          </Typography>

          {skillCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 4, overflow: 'hidden' }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#00ff9d',
                  fontWeight: 500,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  textAlign: 'center',
                }}
              >
                {category.title}
              </Typography>

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    width: 'fit-content',
                  }}
                  animate={{
                    x: [0, -1000],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    },
                  }}
                >
                  {[...category.skills, ...category.skills].map((skill, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.5,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        minWidth: '150px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          transform: 'scale(1.05)',
                          '& img, & span': {
                            filter: 'brightness(1.2)',
                          },
                        },
                      }}
                    >
                      {typeof skill.logo === 'string' && skill.logo.startsWith('http') ? (
                        <Box
                          component="img"
                          src={skill.logo}
                          alt={skill.name}
                          sx={{
                            width: '45px',
                            height: '45px',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            fontSize: '32px',
                            lineHeight: 1,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {skill.logo}
                        </Typography>
                      )}
                      <Typography
                        sx={{
                          color: '#fff',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  ))}
                </motion.div>
              </Box>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Skills; 