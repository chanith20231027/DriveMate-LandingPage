import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Features from './pages/Features'
import Home from './pages/Home'

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    h1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
