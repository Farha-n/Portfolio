import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Paper,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const slides = [
  {
    title: "Project Overview",
    content: "MatarGashti is a comprehensive travel and tourism website built on Weebly, focusing on promoting tourism in Kashmir. The website serves as a one-stop platform for travelers looking to explore the beautiful region of Kashmir.",
    image: "https://images.unsplash.com/photo-1582972236019-e3d10d879b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "SEO Implementation",
    content: "Implemented comprehensive SEO strategies including:",
    points: [
      "Keyword optimization for Kashmir tourism",
      "Meta descriptions and title tags",
      "Image alt texts and optimization",
      "Mobile responsiveness",
      "Page speed optimization",
      "Local SEO for Kashmir region"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Key Features",
    content: "The website includes several key features:",
    points: [
      "Interactive tour packages",
      "Photo galleries",
      "Booking system",
      "Blog section",
      "Contact forms",
      "Social media integration"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
  },
  {
    title: "Technical Implementation",
    content: "Technical aspects of the project:",
    points: [
      "Built on Weebly platform",
      "Custom CSS for unique styling",
      "JavaScript for interactivity",
      "Responsive design",
      "Cross-browser compatibility",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f8e2892af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Results & Impact",
    content: "The project achieved significant results:",
    points: [
      "Increased website traffic",
      "Higher search engine rankings",
      "Improved user engagement",
      "More booking inquiries",
      "Better brand visibility",
      "Positive user feedback"
    ],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const MatarGashtiProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      id="matargashti"
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
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
            },
          }}
        >
          Back to Portfolio
        </Button>

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
          MatarGashti Project
        </Typography>

        <Stepper
          activeStep={currentSlide}
          alternativeLabel
          sx={{ mb: 4 }}
        >
          {slides.map((slide, index) => (
            <Step key={index}>
              <StepLabel>{slide.title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              backgroundColor: 'background.default',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  sx={{
                    objectFit: 'cover',
                    height: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {slides[currentSlide].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ mb: 3 }}
                  >
                    {slides[currentSlide].content}
                  </Typography>
                  {slides[currentSlide].points && (
                    <Box sx={{ mb: 3 }}>
                      {slides[currentSlide].points.map((point, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          color="text.primary"
                          sx={{
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            '&:before': {
                              content: '"•"',
                              color: 'primary.main',
                              mr: 1,
                            },
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                    </Box>
                  )}
                  <Box
                    sx={{
                      mt: 'auto',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 2,
                    }}
                  >
                    <Button
                      onClick={handlePrevious}
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
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
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
                      Next
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MatarGashtiProject; 