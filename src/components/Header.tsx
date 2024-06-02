import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import flamelogo from "/flame-logo.svg";
import Languagebtn from "./Languagebtn";
import { useTranslation, I18nextProvider } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import i18n from "./i18n"; // Corrected import path

const Header = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const container = document.querySelector('.scroll-container');
    if (!container) return;

    const currentScrollY = container.scrollTop;
    const isScrollingDown = currentScrollY > lastScrollY;

    setShowLogo(!isScrollingDown);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const getStartedBtn = () => {
    console.log("Get Started");
  };

  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <AppBar position="fixed" sx={{ bgcolor: "transparent", boxShadow: 0 }}>
        <Container maxWidth="xl" sx={{ paddingInline: { xs: "0", md: "" } }}>
          <Toolbar
            sx={{ display: "flex", justifyContent: "flex-start", gap: "12px" }}
          >
            {showLogo && (
              <CardMedia
                component="img"
                image={flamelogo}
                alt="Flame Logo"
                sx={{
                  width: "8rem",
                  height: "6rem",
                  objectFit: "contain",
                  marginRight: "0.2rem",
                }}
              />
            )}

            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: "none",
                  md: "flex",
                },
                marginLeft: "auto",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Button
                onClick={getStartedBtn}
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
                {t("Get Started")}
              </Button>
            </Box>
            <Box sx={{ marginLeft: { md: "0", xs: "auto" } }}>
              <Languagebtn />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </I18nextProvider>
  );
};

export default Header;
