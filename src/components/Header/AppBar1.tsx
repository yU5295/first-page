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
import styled from 'styled-components';

const pages = ['Organizations', 'Members', 'Wiener winers','How to/FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Logo = styled.h1`
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 900;
		font-size: 25px;
		line-height: 82.88%;
		color: #FFFFFF;
		width: 80px;
    height: 80px;
		background: linear-gradient(135deg, #DB1DFB 0%, #816AEF 48.96%, #21BEE2 100%);
		border-radius: 5px;
		padding-top: 32px;
		padding-bottom: 32px;
  `;

const MidLetter = styled.div`
		font-family: 'Arvo';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		color: ${props => props.color};
		margin: 1px;
  `;

	const GradientButton = styled.button`
	background: 
	linear-gradient(#231D24, #231D24) padding-box,
	linear-gradient(60deg, #DB1DFB, #21BEE2) border-box;
	color: #FFFFFF;
	padding: 5px 20px;
	border: 1px solid transparent;
	border-radius: 40px;
	display: inline-block;
	font-size: 18px;
	`;
	const GradientLetter = styled.div`
		font-family: 'Arvo';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		background: linear-gradient(93.66deg, #DB1DFB -59.64%, #816AEF 48.28%, #21BEE2 160.8%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		border: 1px solid linear-gradient(93.66deg, #DB1DFB -59.64%, #816AEF 48.28%, #21BEE2 160.8%);
	`;

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
        backgroundColor: `${theme.palette.background.default}`,
      })}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: '30%',
              display: { xs: 'flex', md: 'none' },
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

          <Box sx={{ flexGrow: 0 }}>
            <MidLetter color='#FFFFFF'>Collect Now</MidLetter>
            <GradientButton><GradientLetter>13 532$</GradientLetter></GradientButton>
            <MidLetter color='#FFFFFF'>Next Payment</MidLetter>
            <GradientLetter>14.12.2021</GradientLetter>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
