import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022 - Present",
    location: "Punjab, India",
    description: "Currently pursuing my BTech in Computer Science with a focus on software development and emerging technologies. Maintaining a CGPA of 7.68.",
    achievements: [
      "Core member of Khoj, an initiative under the Division of Youth Affairs, actively contributing to tech-driven youth programs",
      "Managed and organized LPU's first-ever anime conventions — Anicon 1 and Anicon 2",
      "Completed online certifications in Full-Stack Web Development, DevOps, and Cloud Infrastructure"
    ]
  },
  {
    school: "Luthra Higher Secondary School",
    degree: "Science and Mathematics",
    period: "2019 - 2021",
    location: "Jammu, Jammu and Kashmir",
    description: "Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics. Scored 92.8% in the final examinations.",
    achievements: [
      "Represented school in various science exhibitions",
      "Participated in mathematics olympiads",
      "Active member of the school's science club"
    ]
  }
];

const Education = () => {
  return (
    <Container maxWidth="xl">
      <Box
        id="education"
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
              education.js
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#00ff9d',
                fontWeight: 700,
                mb: 4,
              }}
            >
              Education
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {educationData.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#1a1a2e',
                    borderRadius: '0.5rem',
                    p: 3,
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <SchoolIcon sx={{ fontSize: 30, color: '#ff69b4' }} />
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#ff69b4',
                          fontWeight: 600,
                        }}
                      >
                        {edu.school}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'white',
                          opacity: 0.7,
                        }}
                      >
                        {edu.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {edu.degree}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#00ff9d',
                      mb: 2,
                      fontFamily: 'monospace',
                    }}
                  >
                    {edu.period}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    {edu.description}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ff69b4',
                        mb: 2,
                        fontFamily: 'monospace',
                      }}
                    >
                      Key Achievements:
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        listStyleType: 'none',
                        pl: 0,
                        m: 0,
                      }}
                    >
                      {edu.achievements.map((achievement, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            color: 'white',
                            mb: 1,
                            pl: 3,
                            position: 'relative',
                            '&::before': {
                              content: '"▹"',
                              position: 'absolute',
                              left: 0,
                              color: '#00ff9d',
                            },
                            '&:hover': {
                              color: '#00ff9d',
                              transform: 'translateX(10px)',
                              transition: 'all 0.3s ease',
                            },
                          }}
                        >
                          {achievement}
                        </Box>
                      ))}
                    </Box>
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

export default Education; 