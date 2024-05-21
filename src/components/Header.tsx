import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import flamelogo from "/flame-logo.svg";
import Languagebtn from "./Languagebtn";
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from "./i18n"; // Corrected import path

const pages = ["Products", "Pricing", "Blog"];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <AppBar position="fixed" sx={{ bgcolor: "transparent", boxShadow: 0 }}>
        <Container maxWidth="xl" sx={{ paddingInline:{xs:'0',md:''} }}>
          <Toolbar sx={{ display:'flex', justifyContent:'flex-start', gap:'12px' }}>
            <img src={flamelogo} className="w-32 h-24 hidden md:flex mr-1" />

            <Box sx={{  display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{t(page)}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <img src={flamelogo} className="w-32 h-24 flex md:hidden mr-1" />

            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: "none",
                  md: "flex",
                },
                marginLeft: "auto",
                gap: "16px",
                alignItems: "center"
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  bgcolor: "trasnparent",
                  textTransform: "capitalize",
                  paddingInline: "2rem",
                  borderRadius: "999px",
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    color: "black",
                  },
                }}
              >
               {t('Log In')}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  bgcolor: "#FB1F43",
                  textTransform: "capitalize",
                  paddingInline: "2rem",
                  borderRadius: "999px",
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "#C81230",
                    color: "white",
                  },
                  "&:active": {
                    bgcolor: "#C81230",
                    color: "white",
                  },
                }}
              >
                {t('Get Started')}
              </Button>
            </Box>
            <Box sx={{ marginLeft:{md:'0', xs:'auto'} }}>
            <Languagebtn />
            </Box>
          </Toolbar>
          
        </Container>
      </AppBar>
    </I18nextProvider>
  );
};

export default Header;
