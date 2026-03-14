import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const stackItems = [
  {
    title: 'Frontend',
    value: 'React, HTML, CSS, JavaScript',
  },
  {
    title: 'Backend',
    value: 'Node.js, Express',
  },
  {
    title: 'Database',
    value: 'MongoDB',
  },
  {
    title: 'Tools',
    value: 'Git, GitHub, Netlify',
  },
];

const TechStack = () => {
  return (
    <Container maxWidth="lg">
      <Box id="tech-stack" sx={{ py: { xs: 9, md: 12 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 1 }}>
          Tech Stack
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', maxWidth: 650, mx: 'auto', mb: 5 }}
        >
          A concise breakdown of my core full stack toolkit.
        </Typography>

        <Grid container spacing={2.5}>
          {stackItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.value}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TechStack;
