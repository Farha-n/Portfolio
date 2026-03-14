import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Container maxWidth="lg">
      <Box id="experience" sx={{ py: { xs: 9, md: 12 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 5 }}>
          Experience
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              B.Tech Computer Science – LPU
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              2022 – 2026
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Building strong fundamentals in software engineering, full stack web development, and modern
              deployment workflows while delivering practical projects.
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Experience;
