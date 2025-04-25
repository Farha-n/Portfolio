import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Container, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'My Journey Building a Custom Frame Store with React',
    excerpt: 'During my frontend development learning journey, I challenged myself to build a real-world React project — something both creative and useful. That\'s how I ended up creating Custom Frame Store, a fully functional e-commerce site for buying custom Arabic/English/Urdu name frames and bookmarks.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'April 25, 2025',
    readTime: '5 min read',
    link: 'https://kashmiricuisine01.blogspot.com/2025/04/my-journey-building-custom-frame-store.html'
  },
  {
    id: 2,
    title: 'Building Responsive Websites with Flexbox and Grid',
    excerpt: 'In today\'s world of mobile-first design, creating responsive websites is no longer optional — it\'s a must. Two powerful CSS layout tools, Flexbox and CSS Grid, make building responsive layouts easier and cleaner than ever before.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    date: 'April 25, 2025',
    readTime: '8 min read',
    link: 'https://kashmiricuisine01.blogspot.com/2025/04/building-responsive-websites-with.html'
  },
  {
    id: 3,
    title: 'What is React?',
    excerpt: 'React is a JavaScript library created by Facebook for building fast and interactive user interfaces. It\'s one of the most popular frontend libraries in the world, known for its component-based architecture and virtual DOM.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: 'April 25, 2025',
    readTime: '6 min read',
    link: 'https://kashmiricuisine01.blogspot.com/2025/04/what-is-react.html'
  }
];

const Blog = () => {
  return (
    <Box
      id="blog"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'primary.main',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
          }}
        >
          Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  backgroundColor: 'background.default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {post.date} • {post.readTime}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.primary"
                    sx={{ mb: 3 }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Button
                    component="a"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog; 