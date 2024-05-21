import {
  Container,
  Box,
  Toolbar,
  Button,
} from "@mui/material";
import { List, ListItem, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import flamelogo from "/flame-logo.svg";
import { useTranslation } from "react-i18next";
import { BsTwitterX } from "react-icons/bs";

const socialMediaLinks = [
  {
    href: "https://www.twitter.com",
    icon: (
      <BsTwitterX style={{ width: 16, height: 16 }} />

    ),
  },
  { href: "https://www.youtube.com", icon: <YouTubeIcon /> },
  { href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
  { href: "https://www.facebook.com", icon: <FacebookIcon /> },
  { href: "https://www.instagram.com", icon: <InstagramIcon /> },
];

const privaypolicylinks = [
  { href: "https://tremsofuse", title: "Terms of Use" },
  { href: "https://privacypolicy", title: "Privacy Policy" },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        bgcolor: "#0D0B0C",
        paddingBlock: {xs:'2rem', md:'3rem'},
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ paddingLeft:{xs:'0px', md:'unset'},  }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: {xs:'start', md:'start'},
            justifyContent: "space-between",
            gap: "12px",
            width: {xs:'100%', md:'70%'},
            flexDirection: {xs:'column', md:'row'},
          }}
        >
         

          <List sx={{ display: "flex", flexDirection: "row", padding: 0, order:{xs:-1, md:2} }}>
            {socialMediaLinks.map((item, index) => (
              <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                <IconButton
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#B6B6B6",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display:'flex', justifyContent:'space-between', width:'100%' }}>
          <Button
            component="a"
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
        
          >
            <img src={flamelogo} className="w-32 h-8 object-contain" />
          </Button>

          <List sx={{  display: "flex", flexDirection: {xs:'column', md:'row'}, padding: 0, order:{xs:-1, md:1} }}>
            {privaypolicylinks.map((item, index) => (
              <ListItem key={index} sx={{ width: "auto", padding: 0 }}>
                <Button
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    textTransform: "capitalize",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t(item.title)}
                </Button>
              </ListItem>
            ))}
          </List>
          </Box>

        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;
