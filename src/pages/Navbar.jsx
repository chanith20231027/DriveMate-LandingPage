import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

const Navbar = () => {
  // ... existing state and hooks ...

  return (
    <>
      <StyledAppBar>
        <Container>
          <StyledToolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/images/logo/logosvg.svg"
                alt="DriveMate Logo"
                sx={{
                  height: '32px',
                  width: 'auto',
                  marginRight: '8px'
                }}
              />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  '&:hover': {
                    color: 'var(--primary-dark)',
                  }
                }}
              >
                DriveMate
              </Typography>
            </Box>

            {/* Rest of the navbar code remains the same */}
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default Navbar; 