import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectCardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const featuredRepoOrder = [
  'Email-Scheduler',
  'WEB-BRAIN-AI',
  'opd',
  'ResumeRAG',
  'Custom-Frames',
  'K22AZ_Project',
  'Tripboss',
];

const repoMetadata = {
  'Email-Scheduler': {
    title: 'Email Scheduler',
    description:
      'Full stack email scheduling platform with queue-based processing using Express, BullMQ, Redis, PostgreSQL, React, and TypeScript.',
    technologies: ['React', 'TypeScript', 'Express', 'BullMQ', 'Redis', 'PostgreSQL'],
  },
  'WEB-BRAIN-AI': {
    title: 'WebBrain AI',
    description:
      'AI-powered URL question answering app with background jobs, real-time status updates, and a modern full stack architecture.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'BullMQ'],
  },
  opd: {
    title: 'OPD Token Allocation Engine',
    description:
      'Priority-based hospital OPD token allocation engine with dynamic queue handling, slot limits, and fairness constraints.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'API Design'],
  },
  ResumeRAG: {
    title: 'ResumeRAG',
    description:
      'AI-assisted resume search and job matching system with role-based access, semantic search, and evidence-backed matching.',
    technologies: ['Node.js', 'Express', 'SQLite', 'RAG', 'JavaScript'],
  },
  'Custom-Frames': {
    title: 'Custom Frames Store',
    description:
      'MERN e-commerce project for custom frames featuring product browsing, personalization workflow, and purchase flow.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: 'https://custom-frames-one.vercel.app/',
  },
  K22AZ_Project: {
    title: 'Fitness Progress Tracker',
    description:
      'A fitness web application offering personalized workout plans, health tips, and user authentication features. Designed an intuitive and responsive UI to enhance user engagement. Incorporated a BMI calculator and goal-setting feature.',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    live: 'https://k22-az-project-luzoflq5s-farhans-projects-c54e4245.vercel.app/',
  },
  Tripboss: {
    title: 'Travel Website',
    description:
      'Tripboss is a powerful search engine optimized for fast and efficient travel data retrieval. It features advanced search algorithms for enhanced accuracy and a seamless user experience. Built with React.js, Node.js, Express.js, and MongoDB for robust backend support and dynamic frontend interactions.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    live: 'https://tripboss-zeta.vercel.app',
  },
};

const fallbackProjects = [
  {
    title: repoMetadata['Email-Scheduler'].title,
    description: repoMetadata['Email-Scheduler'].description,
    technologies: repoMetadata['Email-Scheduler'].technologies,
    github: 'https://github.com/Farha-n/Email-Scheduler',
    live: '',
  },
  {
    title: repoMetadata['WEB-BRAIN-AI'].title,
    description: repoMetadata['WEB-BRAIN-AI'].description,
    technologies: repoMetadata['WEB-BRAIN-AI'].technologies,
    github: 'https://github.com/Farha-n/WEB-BRAIN-AI',
    live: '',
  },
  {
    title: repoMetadata.opd.title,
    description: repoMetadata.opd.description,
    technologies: repoMetadata.opd.technologies,
    github: 'https://github.com/Farha-n/opd',
    live: '',
  },
  {
    title: repoMetadata.ResumeRAG.title,
    description: repoMetadata.ResumeRAG.description,
    technologies: repoMetadata.ResumeRAG.technologies,
    github: 'https://github.com/Farha-n/ResumeRAG',
    live: '',
  },
  {
    title: repoMetadata['Custom-Frames'].title,
    description: repoMetadata['Custom-Frames'].description,
    technologies: repoMetadata['Custom-Frames'].technologies,
    github: 'https://github.com/Farha-n/Custom-Frames',
    live: repoMetadata['Custom-Frames'].live,
  },
  {
    title: repoMetadata['K22AZ_Project'].title,
    description: repoMetadata['K22AZ_Project'].description,
    technologies: repoMetadata['K22AZ_Project'].technologies,
    github: 'https://github.com/Farha-n/K22AZ_Project',
    live: repoMetadata['K22AZ_Project'].live,
  },
  {
    title: repoMetadata.Tripboss.title,
    description: repoMetadata.Tripboss.description,
    technologies: repoMetadata.Tripboss.technologies,
    github: 'https://github.com/Farha-n/Tripboss',
    live: repoMetadata.Tripboss.live,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Farha-n/repos?per_page=100', {
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const repos = await response.json();
        const repoByName = repos.reduce((result, currentRepo) => {
          result[currentRepo.name] = currentRepo;
          return result;
        }, {});

        const nextProjects = featuredRepoOrder
          .filter((repoName) => !!repoByName[repoName])
          .map((repoName) => {
            const repo = repoByName[repoName];
            const meta = repoMetadata[repoName];

            return {
              title: meta.title,
              description:
                meta.description ||
                repo.description ||
                `${repo.name} is a ${repo.language || 'software'} project from my GitHub portfolio.`,
              technologies: meta.technologies,
              github: repo.html_url,
              live: meta.live || repo.homepage || '',
            };
          });

        if (nextProjects.length > 0) {
          setProjects(nextProjects);
        }
      } catch {
        // Keep fallback project data when GitHub API fails.
      }
    };

    fetchProjects();
    return () => controller.abort();
  }, []);

  return (
    <Container maxWidth={false} sx={{ px: { xs: 1.5, md: 3 } }}>
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
                <motion.div
                  custom={index}
                  variants={projectCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
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

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
                      {project.live && (
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
                      )}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;
