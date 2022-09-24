import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { IoLogoDiscord, IoLogoTwitter } from 'react-icons/io5'

const pages = ['Organizations', 'Members', 'Wiener winers','How to/FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" 
      sx={(theme) => ({
      backgroundColor: `${theme.palette.background.footer}`,
      })}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex', }, justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              margin: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%)',
              borderRadius: '5px',
              width: '80px',
              height: '80px',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'flex' }, flexGrow: 0, alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'inline' }, mr: 1 }}>
                <IoLogoDiscord />
            </Box>
            <Box sx={{ display: { xs: 'inline' }, mr: 1 }}>
                <IoLogoTwitter />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>
          </Box>
        </Toolbar>
        <Toolbar disableGutters sx={{ display: { xs: 'flex', md: 'none', }, justifyContent: 'space-between' }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ display: { xs: 'inline' }, mr: 1 }}>
                <IoLogoDiscord />
            </Box>
            <Box sx={{ display: { xs: 'inline' }, mr: 1 }}>
                <IoLogoTwitter />
            </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            {pages.map((page) => (
              <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2,
                    color: 'white', 
                    display: 'block',
                    fontSize: { xs: '10px', md: '30px' },
                  }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
