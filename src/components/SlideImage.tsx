import { useEffect, useState} from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Mobilemockup from "./Mobilemockup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/animation.css";

interface Props {
  heroTitle: string;
  heroSubTitle?: string | boolean;
  heroSpan: boolean;
  heroGradeint: boolean;
  heroPara: string;
  isVideo?: boolean;
  isImage?: boolean;
  imageSrc?: string;
  videoSrc?: string;
  centerAlignmentTxt?: boolean;
  leftAlignmentTxt?: boolean;
  btnClick: () => void;
  btnTxt: string;
  mobileMockup?: boolean;
  heroParaWidth? :boolean;
}
gsap.registerPlugin(ScrollTrigger);
const SlideImage = ({
  heroTitle,
  heroPara,
  btnClick,
  heroSpan,
  heroGradeint,
  heroSubTitle,
  isVideo,
  isImage,
  imageSrc,
  videoSrc,
  centerAlignmentTxt,
  leftAlignmentTxt,
  btnTxt,
  mobileMockup,
  heroParaWidth
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t } = useTranslation();
  const texts: string[] = ["Crush", "Muse", "Love"];

  // Text Effect
  useEffect(() => {
    let intervalId: number;
    if (videoLoaded) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [videoLoaded, texts.length]);
  //Mobile cover useEffect

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".redcard",
  //       markers: false,
  //       scrub: 1,
  //       start: "top 20%",
  //       end: "top 80%",
  //     },
  //   });

  //   tl.from(".mobileCover", {
  //     y: 200,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //   }).to(".mobileCover", { y: 0, opacity: 1, duration: 2, stagger: 0.2 });
  // }, []);

  let herGradient = "";

  if (heroGradeint) {
    herGradient = `before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#110C0C]/40 before:via-[#110C0C]/30 before:to-[#110C0C]/40`;
  }
  const gradientClr = `h-[100vh] w-full relative z-10 ${herGradient}`;

  return (
    <Card
      sx={{
        borderRadius: 0,
        position: "relative",
        height: "100vh",

      }}
      className={gradientClr}
    >
      {isVideo && (
        <CardMedia
          component={"video"}
          image={videoSrc}
          autoPlay={isVideo}
          loop={isVideo}
          controls={false}
          muted={isVideo}
          onLoadedData={() => setVideoLoaded(true)}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source src={videoSrc} type="video/webm" />
        </CardMedia>
      )}
      {isImage && (
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            "&::before": {
              content: '""',
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            },
          }}
        />
      )}

      {/* Center Alignment text */}

      {centerAlignmentTxt && (
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            inset: 0,
            gap: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "start", md: "center" },
            textAlign: { xs: "left", md: "center" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: { xs: "start", md: "center" },
              position: "relative",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "9vw", md: "5vw", xl:'5vw' },
                  color: "white",
                  position: "relative",
                  display: "flex",
                  
                }}
              >
                {t(heroTitle)}{" "}
                {/* {heroSpan && (
                <span className="text-[#FB1F43] text-highlight">
                  {t("Crush")}
                </span>
              )} */}
                {heroSpan && (
                  <Box
                    className="text-container"
                  >
                    {texts.map((text, index) => (
                      <Box
                        key={index}
                        sx= {{ color: "#FB1F43" }}
                        className={`text ${
                          index === currentIndex ? "animate" : ""
                        }`}
                      >
                        {heroSpan && text === "Crush" ? (
                          <Typography
                            variant="h1"
                            sx={{
                              color: "#FB1F43",
                              fontSize: { xs: "9vw", md: "5vw", xl:'5vw' },
                              fontWeight: "bold",
                            }}
                          >
                            {t(text)}
                          </Typography>
                        ) : (
                          t(text)
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </Typography>
            </Box>

            <Box sx={{ width: heroParaWidth ? { xs: "100%", md: "38%" } : 'auto', marginTop: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "white",
                }}
              >
                {t(heroPara)}
              </Typography>
            </Box>

            <Button
              onClick={btnClick}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                bgcolor: "#FB1F43",
                textTransform: "capitalize",
                paddingInline: "2rem",
                paddingBlock: ".5rem",
                borderRadius: "999px",
                fontSize: "18px",
                fontWeight: 500,
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
              {t(btnTxt)}
            </Button>
          </Box>
        </Container>
      )}

      {/* Left Alignment text */}
      {leftAlignmentTxt && (
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            inset: 0,
            gap: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            textAlign: "left",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Box className="redcard"></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
              height: "100%",
              width: "100%",
              gap: 4,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "start",
                paddingTop:"25px"
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  wordBreak: "break-all",
                  overflowWrap: "break-word",
                  fontSize: { xs: "9vw", md: "5vw", xl:'5vw' },
                  display: "inline-block", whiteSpace: "pre-line"
                }}
              >
                {t(heroTitle)}{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  width: { xs: "100%", md: "100%" },
                }}
              >
                {heroSubTitle && typeof heroSubTitle === "string" && (
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: { xs: "28px", md: "32px" },
                      whiteSpace: "pre-line",
                      fontSize: { xs: "22px", md: "26px" },
                 
                    }}
                  >
                    {t(heroSubTitle)}{" "}
                  </Typography>
                )}

                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-line",
                    fontSize: { xs: "16px", md: "18px" },
                    color: "white",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  {t(heroPara)}
                </Typography>
              </Box>

              <Button
                onClick={btnClick}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  bgcolor: "#FB1F43",
                  textTransform: "capitalize",
                  paddingInline: "2rem",
                  paddingBlock: ".5rem",
                  borderRadius: "999px",
                  fontSize: "18px",
                  fontWeight: 500,
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
                {t(btnTxt)}
              </Button>
            </Box>
            {mobileMockup && (
              <Box
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: "0%",
                  display: {xs:'none', sm:'none', md:'flex'},
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: "white",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Box className="mobileCover" sx={{ transform:{xs:'scale(.75)', md:'scale(.75)', xl:'scale(1)'} }}>
                  <Mobilemockup />
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      )}
    </Card>
  );
};

export default SlideImage;
