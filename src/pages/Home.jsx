import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PlayStoreIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  background: '#FFFFFF',
  padding: '80px 0',
  '@media (max-width: 600px)': {
    padding: '60px 0',
    minHeight: 'auto',
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '16px',
  padding: '24px',
  transition: 'all 0.3s ease',
  border: '1px solid #F0F0F0',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
    borderColor: 'var(--accent)',
  },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 600px)': {
    margin: '0.5rem 0',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'var(--primary)',
  color: 'var(--light)',
  padding: '12px 32px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  border: '1px solid transparent',
  '&:hover': {
    background: 'var(--primary-dark)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(139, 75, 166, 0.2)',
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  background: 'var(--primary)',
  color: 'var(--light)',
  padding: '12px 24px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  border: '1px solid transparent',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  '&:hover': {
    background: 'var(--primary-dark)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(139, 75, 166, 0.2)',
  },
}));

const ContactFormField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#F8F9FA',
    '&:hover fieldset': {
      borderColor: 'var(--primary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary)',
    }
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-light)',
    '&.Mui-focused': {
      color: 'var(--primary)',
    }
  }
});

const AnimatedBox = styled(Box)`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contactSectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      navigate('/', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox sx={{ animation: 'fadeInUp 0.8s ease-out' }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontFamily: 'var(--heading-font)',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: { xs: 1.5, md: 2 },
                    letterSpacing: '-0.02em',
                    lineHeight: { xs: 1.2, md: 1.3 },
                  }}
                >
                  Revolutionize Your Tour Experience
                </Typography>
              </AnimatedBox>
              
              <AnimatedBox sx={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontFamily: 'var(--body-font)',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'var(--text-light)',
                    marginBottom: 4,
                    lineHeight: 1.4,
                  }}
                >
                  DriveMate Dashboard | Driver App
                </Typography>
              </AnimatedBox>

              <AnimatedBox sx={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards', opacity: 0 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <DownloadButton
                    onClick={scrollToContact}
                    startIcon={<EmailIcon />}
                  >
                    Contact Us for Dashboard
                  </DownloadButton>
                  <DownloadButton
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank')}
                    startIcon={<PlayStoreIcon />}
                  >
                    Download App
                  </DownloadButton>
                </Stack>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <AnimatedBox sx={{ animation: 'scaleIn 1s ease-out 0.3s forwards', opacity: 0, width: '100%' }}>
                <Box
                  component="img"
                  src="/images/logo/logosvg.svg"
                  alt="DriveMate Logo"
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    }
                  }}
                />
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Products Section */}
      <Box sx={{ py: 8, background: '#fff' }}>
        <Container>
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              fontFamily: 'var(--heading-font)',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--primary)',
              mb: 6 
            }}
          >
            Our System
          </Typography>
          <Grid container spacing={4}>
            {/* Admin Dashboard Card */}
            <Grid item xs={12} md={6}>
              <ProductCard>
                <CardContent>
                  <Box
                    component="img"
                    src="/images/pics/pic1.jpg"
                    alt="DriveMate Dashboard"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                  />
                  <Typography variant="h5" sx={{ fontFamily: 'var(--heading-font)', fontWeight: 700, mb: 2 }}>
                    DriveMate Dashboard
                  </Typography>
                  <Typography sx={{ fontFamily: 'var(--body-font)', color: 'var(--text-light)', mb: 3 }}>
                  The Ultimate Tour Management Solution for Agencies. A powerful, business-friendly dashboard designed to streamline your operations, boost efficiency, and grow your agency.
                  </Typography>
                  <StyledButton 
                    onClick={() => {
                      navigate('/features#admin-dashboard-card', { replace: true });
                      setTimeout(() => {
                        const element = document.getElementById('admin-dashboard-card');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    Learn More
                  </StyledButton>
                </CardContent>
              </ProductCard>
            </Grid>

            {/* Driver App Card */}
            <Grid item xs={12} md={6}>
              <ProductCard>
                <CardContent>
                  <Box
                    component="img"
                    src="/images/pics/phone1.png"
                    alt="DriveMate Mobile App"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                  />
                  <Typography variant="h5" sx={{ fontFamily: 'var(--heading-font)', fontWeight: 700, mb: 2 }}>
                    DriveMate Driver App
                  </Typography>
                  <Typography sx={{ fontFamily: 'var(--body-font)', color: 'var(--text-light)', mb: 3 }}>
                  The Ultimate Driving Companion for Freelance & Agency Drivers. Maximize your earnings, get flexible job opportunities, and take control of your driving career all in one app!
                  </Typography>
                  <StyledButton 
                    onClick={() => {
                      navigate('/features#driver-app-card', { replace: true });
                      setTimeout(() => {
                        const element = document.getElementById('driver-app-card');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                  >
                    Learn More
                  </StyledButton>
                </CardContent>
              </ProductCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        ref={contactSectionRef}
        sx={{ 
          py: { xs: 6, md: 10 }, 
          background: '#FFFFFF',
          borderTop: '1px solid #F0F0F0',
          borderBottom: '1px solid #F0F0F0'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            {/* Contact Form Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ 
                fontFamily: 'var(--heading-font)', 
                fontWeight: 700, 
                mb: 4, 
                color: 'var(--primary)',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}>
                Get in Touch
              </Typography>
              
              {/* Contact Form */}
              <Box component="form" sx={{ mb: 4 }}>
                <ContactFormField
                  fullWidth
                  label="Name"
                  placeholder="Enter your name"
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { py: 1.5 }
                  }}
                />
                <ContactFormField
                  fullWidth
                  label="Email"
                  placeholder="Enter your email"
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { py: 1.5 }
                  }}
                />
                <ContactFormField
                  fullWidth
                  label="Message"
                  placeholder="Enter your message"
                  multiline
                  rows={4}
                  sx={{ mb: 4 }}
                />
                <StyledButton 
                  type="submit"
                  sx={{ 
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem'
                  }}
                >
                  Send Message
                </StyledButton>
              </Box>
            </Grid>

            {/* Contact Information Side */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pt: { xs: 2, md: 8 } }}>
                <Stack spacing={5} sx={{ pl: { md: 4 } }}>
                  <Box>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{
                        backgroundColor: 'var(--surface-light)',
                        borderRadius: '12px',
                        p: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <EmailIcon sx={{ color: 'var(--primary)', fontSize: '2rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontFamily: 'var(--heading-font)', 
                          fontWeight: 600,
                          mb: 1
                        }}>
                          Email
                        </Typography>
                        <Typography sx={{ 
                          color: 'var(--text-light)',
                          fontSize: '1.1rem'
                        }}>
                          dbforg12@gmail.com
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{
                        backgroundColor: 'var(--surface-light)',
                        borderRadius: '12px',
                        p: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <PhoneIcon sx={{ color: 'var(--primary)', fontSize: '2rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontFamily: 'var(--heading-font)', 
                          fontWeight: 600,
                          mb: 1
                        }}>
                          Phone
                        </Typography>
                        <Typography sx={{ 
                          color: 'var(--text-light)',
                          fontSize: '1.1rem'
                        }}>
                          +94 71 123 4567
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{
                        backgroundColor: 'var(--surface-light)',
                        borderRadius: '12px',
                        p: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <LocationOnIcon sx={{ color: 'var(--primary)', fontSize: '2rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontFamily: 'var(--heading-font)', 
                          fontWeight: 600,
                          mb: 1
                        }}>
                          Location
                        </Typography>
                        <Typography sx={{ 
                          color: 'var(--text-light)',
                          fontSize: '1.1rem'
                        }}>
                          Colombo, Sri Lanka
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
