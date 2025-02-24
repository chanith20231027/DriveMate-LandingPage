import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  color: 'var(--text-dark)',
  padding: '60px 0 20px 0',
  marginTop: 'auto',
  borderTop: '1px solid #F0F0F0',
  '@media (max-width: 600px)': {
    padding: '40px 0 20px 0',
  },
}));

const FooterLink = styled(Link)({
  fontFamily: 'var(--body-font)',
  color: 'var(--text-light)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  fontSize: '1rem',
  '&:hover': {
    color: 'var(--primary)',
    transform: 'translateX(5px)',
  },
});

const SocialButton = styled(IconButton)({
  color: 'var(--text-light)',
  transition: 'all 0.3s ease',
  padding: '12px',
  '&:hover': {
    color: 'var(--primary)',
    transform: 'translateY(-3px) scale(1.1)',
    background: 'var(--surface-light)',
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    facebook: "https://web.facebook.com/profile.php?id=61573412106812",
    twitter: "https://twitter.com/drivemate",
    linkedin: "https://www.linkedin.com/in/drivemate-a5bb05352",
    instagram: "https://www.instagram.com/dbforg12"
  };

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Left Section - Logo & Tagline */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'var(--heading-font)',
                fontWeight: 700,
                fontSize: '1.5rem',
                mb: 2 
              }}
            >
              DriveMate
            </Typography>
            <Typography 
              sx={{ 
                color: 'var(--text-light)',
                mb: 2,
                fontFamily: 'var(--body-font)',
                maxWidth: '300px' 
              }}
            >
              Revolutionize Your Tour Experience
              Connecting Drivers & Travelers Effortlessly.
            </Typography>
          </Grid>

          {/* Middle Section - Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'var(--heading-font)',
                fontWeight: 600,
                mb: 2 
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
            </Stack>
          </Grid>

          {/* Right Section - Social & Copyright */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'var(--heading-font)',
                fontWeight: 600,
                mb: 2 
              }}
            >
              Connect With Us
            </Typography>
            <Stack 
              direction="row" 
              spacing={{ xs: 1, md: 2 }} 
              sx={{ 
                mb: { xs: 2, md: 3 },
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <SocialButton href={socialLinks.facebook} target="_blank">
                <FacebookIcon />
              </SocialButton>
              <SocialButton href={socialLinks.twitter} target="_blank">
                <TwitterIcon />
              </SocialButton>
              <SocialButton href={socialLinks.linkedin} target="_blank">
                <LinkedInIcon />
              </SocialButton>
              <SocialButton href={socialLinks.instagram} target="_blank">
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box 
          sx={{ 
            borderTop: '1px solid #F0F0F0',
            mt: 4,
            pt: 2,
            textAlign: 'center'
          }}
        >
          <Typography 
            sx={{ 
              color: 'var(--text-light)',
              fontSize: '0.875rem',
              fontFamily: 'var(--body-font)'
            }}
          >
            © {currentYear} DriveMate. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
