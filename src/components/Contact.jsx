import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const ownerEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'khandayfarhan2@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );

      window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
      setStatusType('success');
      setStatusMessage('Opened your email app. Send the drafted message to complete contact.');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage('');

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: ownerEmail,
          message: formData.message,
        },
        publicKey,
      );

      setStatusType('success');
      setStatusMessage('Message sent successfully. Thank you for reaching out!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatusType('error');
      setStatusMessage('Unable to send message right now. Please try again in a moment.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container maxWidth={false} sx={{ px: { xs: 1.5, md: 3 } }}>
      <Box
        id="contact"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          py: 8,
          backgroundColor: '#0a0a1b',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          {/* Left Section - Contact Form */}
          <Box sx={{ flex: '1 1 60%' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#00ff9d',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Send me a message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                opacity: 0.8,
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              If you have any questions or concerns, please don't hesitate to contact me. I am open to any
              work opportunities that align with my skills and interests.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <TextField
                required
                fullWidth
                name="name"
                placeholder="Your Name:"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '16px',
                  },
                }}
              />
              <TextField
                required
                fullWidth
                name="email"
                type="email"
                placeholder="Your Email:"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '16px',
                  },
                }}
              />
              <TextField
                required
                fullWidth
                name="message"
                placeholder="Your Message:"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSending}
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: '#9d00ff',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#7b00cc',
                  },
                }}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <SendIcon sx={{ ml: 1 }} />
              </Button>
              {statusMessage && (
                <Typography
                  variant="body2"
                  sx={{ color: statusType === 'success' ? '#00ff9d' : '#ff6b6b', maxWidth: 560 }}
                >
                  {statusMessage}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Right Section - Contact Information */}
          <Box sx={{ flex: '1 1 40%' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#00ff9d',
                fontWeight: 600,
                mb: 6,
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(0, 255, 157, 0.1)',
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                  }}
                >
                  <EmailIcon sx={{ color: '#00ff9d', fontSize: '2rem' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#00ff9d', mb: 1 }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8 }}>
                    farhanfarooq786000@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(0, 255, 157, 0.1)',
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                  }}
                >
                  <PhoneIcon sx={{ color: '#00ff9d', fontSize: '2rem' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#00ff9d', mb: 1 }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8 }}>
                    +91 9682671112
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(0, 255, 157, 0.1)',
                    borderRadius: '50%',
                    p: 2,
                    display: 'flex',
                  }}
                >
                  <LocationOnIcon sx={{ color: '#00ff9d', fontSize: '2rem' }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#00ff9d', mb: 1 }}>
                    Location
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8 }}>
                    Anantnag, Jammu and Kashmir
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="subtitle2" sx={{ color: '#00ff9d', mb: 2 }}>
                Connect with me
              </Typography>
              <SocialLinks />
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#fff', opacity: 0.7 }}>
            © {new Date().getFullYear()} Farhan Farooq. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 