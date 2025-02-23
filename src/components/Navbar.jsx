import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: '#FFFFFF',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem 1rem',
  minHeight: '64px',
  '@media (max-width: 600px)': {
    padding: '0.6rem 0.8rem',
  },
});

const Logo = styled(Typography)(({ theme }) => ({
  color: 'var(--primary)',
  fontFamily: 'var(--heading-font)',
  fontWeight: '700',
  fontSize: '1.8rem',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
  letterSpacing: '-0.02em',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'var(--primary-dark)',
  },
}));

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  marginLeft: 'auto',
});

const StyledButton = styled(Button)(({ active }) => ({
  fontFamily: 'var(--body-font)',
  color: active ? 'var(--primary)' : 'var(--text-light)',
  padding: '8px 20px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  background: active ? 'var(--surface-light)' : 'transparent',
  '&:hover': {
    background: 'var(--surface-light)',
    color: 'var(--primary)',
    transform: 'translateY(-2px)',
  },
}));

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    background: 'rgba(170, 96, 200, 0.97)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    marginTop: '8px',
    boxShadow: '0 8px 32px rgba(170, 96, 200, 0.2)',
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'var(--body-font)',
  color: 'var(--light)',
  fontSize: '1.1rem',
  padding: '12px 24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'var(--surface-light)',
    transform: 'translateX(5px)',
  },
});

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <>
      <StyledAppBar>
        <Container maxWidth="xl">
          <StyledToolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Box
                  component="img"
                  src="/images/logo/logosvg.svg"
                  alt="DriveMate Logo"
                  sx={{
                    height: '20px',
                    width: 'auto',
                    marginRight: '8px',
                    display: 'block'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--heading-font)',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                    '&:hover': {
                      color: 'var(--primary-dark)',
                    }
                  }}
                >
                  DriveMate
                </Typography>
              </Link>
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  aria-label="menu"
                  onClick={handleMenu}
                  sx={{
                    color: '#FFDFEF',
                    ml: 'auto',
                    '&:hover': {
                      background: 'rgba(234, 189, 230, 0.2)',
                    },
                  }}
                >
                  <MenuIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                <StyledMenu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  {navItems.map((item) => (
                    <StyledMenuItem
                      key={item.path}
                      onClick={handleClose}
                      component={Link}
                      to={item.path}
                    >
                      {item.label}
                    </StyledMenuItem>
                  ))}
                </StyledMenu>
              </>
            ) : (
              <NavLinks>
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledButton>
                      {item.label}
                    </StyledButton>
                  </Link>
                ))}
              </NavLinks>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>
      <Toolbar /> {/* This is for spacing below fixed navbar */}
    </>
  );
};

export default Navbar;
