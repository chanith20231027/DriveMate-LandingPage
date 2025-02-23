import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--heading-font)',
  fontSize: '2.5rem',
  fontWeight: 700,
  color: 'var(--primary)',
  textAlign: 'center',
  marginBottom: '3rem',
}));

const DeveloperCard = styled(Card)(({ theme }) => ({
  padding: '24px',
  textAlign: 'center',
  background: '#FFFFFF',
  borderRadius: '16px',
  border: '1px solid #F0F0F0',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
    borderColor: 'var(--accent)',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '12px !important',
  border: '1px solid #F0F0F0',
  marginBottom: '16px',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0 0 16px 0',
  },
}));

const AboutUs = () => {
  const developers = [
    {
      name: "Kushan Perera",
      role: "Team Lead",
      avatar: "/images/profilePics/p1.jpg",
      bio: "Specializing in mobile application development at Flutter and Dart.",
      github: "https://github.com/MKSPerera",
      linkedin: "http://www.linkedin.com/in/m-kushan-sameera-perera-543671269"
    },
    {
      name: "Darren Armous",
      role: "Team Member",
      avatar: "/images/profilePics/p2.jpg",
      bio: "Specializing in frontend development at React and Next.js.",
      github: "https://github.com/DarrenArmous",
      linkedin: "http://www.linkedin.com/in/darren-armous-paththapperuma-arachchige"
    },
    {
      name: "Iruka Kumara",
      role: "Team Member",
      avatar: "/images/profilePics/p3.jpg",
      bio: "Specializing in backend development and database management.",
      github: "https://github.com/Iruka20230997",
      linkedin: "https://www.linkedin.com/in/iruka-viduranga-438119212"
    },
    {
      name: "Lithira Abhimana",
      role: "Team Member",
      avatar: "/images/profilePics/p4.jpg",
      bio: "Specializing in frontend development at React and Next.js.",
      github: "https://github.com/Lithiraabhi/Lithira-Abhimana",
      linkedin: "https://www.linkedin.com/in/lithira-abhimana-942507295"
    },
    {
      name: "Chanith Ransika",
      role: "Team Member",
      avatar: "/images/profilePics/p5.jpg",
      bio: "Specializing in backend development and database management.",
      github: "https://github.com/chanith20231027",
      linkedin: "https://www.linkedin.com/in/chanith-ransika-58567a298"
    },
    {
      name: "Thisen Dewnim",
      role: "Team Member",
      avatar: "/images/profilePics/p6.jpg",
      bio: "Specializing in mobile application development at Flutter and Dart.",
      github: "https://github.com/ThisenDewnim",
      linkedin: "https://www.linkedin.com/in/thisen-dewnim"
    }
  ];

  const faqs = [
    {
      question: "Is this a kind of Uber or Pick Me?",
      answer: "No, DriveMate is not another Uber or PickMe.Unlike ride-hailing services that connect passengers with drivers for on-demand trips, DriveMate is a fleet and job management platform designed specifically for agencies. For Agencies & Businesses: DriveMate helps businesses post jobs, manage drivers, track availability, and optimize operations—something Uber and PickMe don't offer. Not a Marketplace: We don't connect random passengers with drivers. Instead, agencies control their own driver network and assign jobs based on availability and performance. Our driver ranking algorithm ensures the best drivers get the right jobs, improving efficiency and service quality. Custom Scheduling & Payments: Unlike ride-hailing apps, agencies set their own pricing,schedules, and payment structures without third-party intervention."
    },
    {
      question: "Does a driver belong to a specific company to work with DriveMate driver app?",
      answer: "No, drivers are not limited to a single agency within DriveMate. DriveMate is designed to give both agencies and drivers maximum flexibility: Drivers can work with multiple agencies based on availability and job preferences. Agencies can hire and assign jobs to any available driver from the platform, ensuring they always have access to the best talent. Our driver ranking system helps agencies identify and prioritize top-performing drivers for their jobs."
    },
    {
      question: "How does DriveMate handle driver availability and scheduling?",
      answer: "DriveMate provides a smart scheduling system where drivers can update their availability. Agencies can view this in real-time and assign jobs accordingly, ensuring efficient workforce management."
    },
    {
      question: "Can agencies see driver performance and history before assigning jobs?",
      answer: "Yes! DriveMate includes a driver ranking system based on performance metrics like punctuality, completion rates, and customer ratings. This helps agencies make informed decisions when assigning jobs."
    },
    {
      question: "What happens if a job is unassigned or a driver cancels?",
      answer: "If a job remains unassigned or a driver cancels, agencies receive instant alerts and can quickly reassign it to another available driver. The system can also suggest the best-suited drivers based on ranking and availability."
    }
  ];

  return (
    <Box sx={{ 
      py: 8, 
      background: '#FFFFFF'  // Set white background for the entire page
    }}>
      {/* Developers Section */}
      <Container sx={{ mb: 10 }}>
        <SectionTitle>Meet Our Team</SectionTitle>
        <Grid container spacing={4}>
          {developers.map((dev, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <DeveloperCard>
                <Avatar
                  src={dev.avatar}
                  alt={dev.name}
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    margin: '0 auto 20px',
                    bgcolor: 'var(--primary)'
                  }}
                  imgProps={{
                    onError: (e) => {
                      console.error(`Failed to load image for ${dev.name}:`, e);
                    }
                  }}
                />
                <Typography variant="h5" sx={{ fontFamily: 'var(--heading-font)', fontWeight: 600, mb: 1 }}>
                  {dev.name}
                </Typography>
                <Typography sx={{ color: 'var(--primary)', mb: 2 }}>{dev.role}</Typography>
                <Typography sx={{ color: 'var(--text-light)', mb: 3 }}>{dev.bio}</Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <IconButton href={dev.github} target="_blank" sx={{ color: 'var(--text-light)' }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={dev.linkedin} target="_blank" sx={{ color: 'var(--text-light)' }}>
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </DeveloperCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQs Section */}
      <Container sx={{ 
        py: 10,
        background: '#FFFFFF'  // Ensure white background
      }}>
        <SectionTitle>FAQs</SectionTitle>
        {faqs.map((faq, idx) => (
          <StyledAccordion key={idx}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontFamily: 'var(--heading-font)', fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'var(--text-light)' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Container>
    </Box>
  );
};

export default AboutUs;
