import EmailIcon from '@mui/icons-material/Email';
import PlayStoreIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: '40px 0',
  background: '#FFFFFF',
  borderBottom: '1px solid #F0F0F0',
}));

const MainCard = styled(Card)({
  padding: '32px',
  background: '#FFFFFF',
  borderRadius: '20px',
  border: '1px solid #F0F0F0',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
  marginBottom: '48px',
  height: 'calc(100vh - 140px)',
  display: 'flex',
  alignItems: 'center',
});

const FeatureCard = styled(Card)({
  padding: '24px',
  background: '#FFFFFF',
  borderRadius: '16px',
  border: '1px solid #F0F0F0',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
    borderColor: 'var(--accent)',
  },
});

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  background: 'var(--surface-light)',
  color: 'var(--primary)',
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

const ContactButton = styled(Button)(({ theme }) => ({
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

const Features = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dashboardRef = useRef(null);
  const driverAppRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#admin-dashboard-card' && dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#driver-app-card' && driverAppRef.current) {
      driverAppRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const adminFeatures = [
    {
      title: "Driver Ranking & Sorting System",
      description: "Assign the best drivers for every job! Our ranking algorithm evaluates performance, punctuality, and ratings to ensure top-tier service for your clients.",
      image: "/images/pics/driverRank2.webp"
    },
    {
      title: "Post & Manage Jobs with Ease",
      description: "No more manual scheduling headaches! Instantly post jobs, categorize them by status, and track every step all in one place.",
      image: "/images/pics/jobPost.webp"
    },
    {
      title: "Business-Friendly Admin Dashboard",
      description: "DriveMate's intuitive dashboard gives you a comprehensive overview of your entire operation active jobs, driver availability, performance stats, and revenue insights all at a glance.",
      image: "/images/pics/dashboardFeature.webp"
    },
    {
      title: " Smart Scheduling & Real-Time Availability",
      description: "Eliminate driver coordination issues with our intelligent calendar system. View driver availability at a glance and schedule shifts effortlessly.",
      image: "/images/pics/smartSchedule.jpg"
    },
    {
      title: "Secure & Scalable Admin Control",
      description: "With role-based access, you can assign different permission levels to your team ensuring security, efficiency, and accountability across operations.",
      image: "/images/pics/secureAdminControl.png"
    },
    {
      title: "Actionable Insights & Performance Analytics",
      description: "Make data-driven decisions with real-time reports on job performance, driver efficiency, and revenue trends all at your fingertips.",
      image: "/images/pics/performanceAnalytics.jpg"
    },
    {
      title: "Instant Communication & Notifications",
      description: "Keep your drivers updated with automated alerts for new job assignments, schedule changes, and important announcements right within the platform.",
      image: "/images/pics/InstantNotifications.jpg"
    },
    {
      title: "Automated Job Assignments",
      description: "Save time with smart auto-assignment, matching jobs to the best drivers based on availability, ranking, and past performance.",
      image: "/images/pics/jobAssign.png"
    },
    {
      title: "Built to Scale with Your Business",
      description: "Whether you manage 5 drivers or 500, DriveMate is designed to grow with you—offering seamless expansion and enhanced operational control.",
      image: "/images/pics/scaleBusiness.jpg"
    }
  ];

  const driverFeatures = [
    {
      title: "Driver Ranking System",
      description: "Driver ranking system highlights your performance, reliability, and punctuality—helping you stand out and get assigned the best-paying jobs first!",
      image: "/images/pics/driverRank.png"
    },
    {
      title: "Smart Schedule & Availability Control",
      description: "Set your availability with a simple tap. Stay in control of your work-life balance while never missing a great opportunity.",
      image: "/images/pics/calendarDriver.jpg"
    },
    {
      title: "Endless Job Opportunities",
      description: "No more waiting around! Instantly browse and accept jobs from multiple agencies and maximize your work hours on your terms.",
      image: "/images/pics/endlessJob.jpg"
    },
    {
      title: "Track Your Earnings in Real Time",
      description: "No surprises, see your earnings grow with every completed job. Get detailed insights into payments, bonuses, and past trips all in one place.",
      image: "/images/pics/trackEarnings.jpg"
    },
    {
      title: "Instant Job Alerts & Notifications",
      description: "Be the first to know when new jobs are available! Get instant alerts for job postings, confirmations, schedule changes, and important updates.",
      image: "/images/pics/jobAlerts.jpg"
    },
    {
      title: "Seamless Job Management",
      description: "View all assigned, ongoing, and completed jobs in one dashboard. Get precise job details, pickup/drop locations, and agency instructions effortlessly.",
      image: "/images/pics/jobManagementDriver.jpg"
    },
    {
      title: "Work with Multiple Agencies",
      description: "Unlike traditional fleet jobs, DriveMate lets you accept jobs from multiple agencies, maximizing your opportunities and income potential.",
      image: "/images/pics/workWithMulti.jpg"
    }
  ];

  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#FFFFFF'
    }}>
      {/* Admin Dashboard Section */}
      <FeatureSection>
        <Container>
          {/* Main Admin Dashboard Card */}
          <MainCard id="admin-dashboard-card" ref={dashboardRef}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ 
                  fontFamily: 'var(--heading-font)', 
                  fontWeight: 700, 
                  mb: 3,
                  color: 'var(--primary)',
                  fontSize: '2.5rem'
                }}>
                  DriveMate Dashboard
                </Typography>
                <Typography sx={{ 
                  fontFamily: 'var(--body-font)', 
                  color: 'var(--text-light)', 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}>
                  The Ultimate Tour Management Solution for Agencies. A powerful, business-friendly dashboard designed to streamline your operations, boost efficiency, and grow your agency.
                </Typography>
                <ContactButton
                  onClick={handleContactClick}
                  startIcon={<EmailIcon />}
                >
                  Contact Us
                </ContactButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/pics/pic1.jpg"
                  alt="Admin Dashboard Interface"
                  sx={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
            </Grid>
          </MainCard>

          {/* Feature Cards */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%',
            mb: 4 
          }}>
            <Typography variant="h3" sx={{ 
              fontFamily: 'var(--heading-font)', 
              fontWeight: 700,
              textAlign: 'center',
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--surface-light)',
              borderRadius: '50px',
              border: '1px solid var(--accent)',
              color: 'var(--primary)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              fontSize: '2.5rem',
            }}>
              Key Features for DriveMate Dashboard
            </Typography>
          </Box>
          <Stack spacing={3}>
            {adminFeatures.map((feature, idx) => (
              <FeatureCard key={idx}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h5" sx={{ 
                      fontFamily: 'var(--heading-font)', 
                      fontWeight: 600, 
                      mb: 2 
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ 
                      fontFamily: 'var(--body-font)', 
                      color: 'var(--text-light)',
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}>
                      {feature.description}
                    </Typography>
                  </Grid>
                </Grid>
              </FeatureCard>
            ))}
          </Stack>
        </Container>
      </FeatureSection>

      {/* Driver App Section */}
      <FeatureSection>
        <Container>
          {/* Main Driver App Card */}
          <MainCard id="driver-app-card" ref={driverAppRef}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ 
                  fontFamily: 'var(--heading-font)', 
                  fontWeight: 700, 
                  mb: 3,
                  color: 'var(--primary)',
                  fontSize: '2.5rem'
                }}>
                  DriveMate Driver App
                </Typography>
                <Typography sx={{ 
                  fontFamily: 'var(--body-font)', 
                  color: 'var(--text-light)', 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}>
                  The Ultimate Driving Companion for Freelance & Agency Drivers. Maximize your earnings, get flexible job opportunities, and take control of your driving career all in one app!
                </Typography>
                <DownloadButton
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank')}
                  startIcon={<PlayStoreIcon />}
                >
                  Download
                </DownloadButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/pics/phone1.png"
                  alt="Driver App Interface"
                  sx={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'contain',
                    boxShadow: 'none',
                    transform: 'none',
                    transition: 'none',
                    '&:hover': {
                      transform: 'none',
                    },
                    '@media (max-width: 600px)': {
                      height: '400px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </MainCard>

          {/* Feature Cards */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%',
            mb: 4 
          }}>
            <Typography variant="h3" sx={{ 
              fontFamily: 'var(--heading-font)', 
              fontWeight: 700,
              textAlign: 'center',
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--surface-light)',
              borderRadius: '50px',
              border: '1px solid var(--accent)',
              color: 'var(--primary)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              fontSize: '2.5rem',
            }}>
              Key Features for DriveMate Driver App
            </Typography>
          </Box>
          <Stack spacing={3}>
            {driverFeatures.map((feature, idx) => (
              <FeatureCard key={idx}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h5" sx={{ 
                      fontFamily: 'var(--heading-font)', 
                      fontWeight: 600, 
                      mb: 2 
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ 
                      fontFamily: 'var(--body-font)', 
                      color: 'var(--text-light)',
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}>
                      {feature.description}
                    </Typography>
                  </Grid>
                </Grid>
              </FeatureCard>
            ))}
          </Stack>
        </Container>
      </FeatureSection>
    </Box>
  );
};

export default Features;
