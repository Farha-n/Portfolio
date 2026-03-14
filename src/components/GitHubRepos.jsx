import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Farha-n/repos?sort=updated&per_page=6', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Unable to fetch repositories right now.');
        }

        const data = await response.json();
        const sortedData = [...data].sort(
          (currentRepo, nextRepo) => new Date(nextRepo.pushed_at) - new Date(currentRepo.pushed_at),
        );

        setRepos(sortedData.slice(0, 6));
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();

    return () => controller.abort();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box id="github" sx={{ py: { xs: 9, md: 12 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 1 }}>
          Latest GitHub Repositories
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}
        >
          Automatically fetched using the GitHub API.
        </Typography>

        {loading && (
          <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
            Loading repositories...
          </Typography>
        )}

        {!loading && error && (
          <Typography color="error" sx={{ textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        {!loading && !error && (
          <Grid container spacing={2.5}>
            {repos.map((repo, index) => (
              <Grid item xs={12} sm={6} md={4} key={repo.id}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
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
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {repo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 50 }}>
                      {repo.description || 'No description provided.'}
                    </Typography>
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, fontWeight: 600 }}
                    >
                      View Repository <OpenInNewIcon sx={{ fontSize: '1rem' }} />
                    </Link>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default GitHubRepos;
