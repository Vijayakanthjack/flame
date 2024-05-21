
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import Header from "../components/Header";
import { Box } from "@mui/material";
import SlideImage from "../components/SlideImage";
import Footer from "../components/Footer";
// import SlideImg01 from "/slider-bg1.jpg";
import SlideImg02 from "/slider-bg02.jpg";
// import SlideImg03 from "/slider-bg3.jpg";
import SlideImg04 from "/slider-bg04.jpg";
import SlideVideo2 from "/fun-people-married-on-vacation-enjoy-life-on-beach.webm";
import SlideVideo1 from "/Landingpage.webm";


const Home = () => {
  const heroParaOne = `Flame is an exclusive global community of fun loving, adventorous and exciting men and women Whether you are in the mood to flirt, find love, shake a leg or just a good time, find your next, here on flame`;
  const heroParaTwo = `Discover exciting people from around the world. Meet without waiting to be swiped. Build instant connections. Have unlimited fun.`;
  const heroParaThree = `Travel around the world. Live. Love. Laugh.`;
  const heroParaFour = `Discover moments that last a life time`;
  const heroSubtxt = `There's always someone for you. Everytime. Everywhere.`;

  const getStarted = () => {
    console.log("getStarted");
  };



  return (
    <ReactLenis root>
      <Header />
      
        <Box
          sx={{
            // overflowY: "scroll",
            height: "100vh",
            scrollSnapType: 'y mandatory',
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar if desired
            },
          }}
        >
          <SlideImage
            isVideo={true}
            videoSrc={SlideVideo1}
            heroTitle={'Find your'}
            heroPara={heroParaOne}
            btnClick={getStarted}
            heroSpan={true}
            heroGradeint={true}
            centerAlignmentTxt={true}
            btnTxt="Get Started"
          />
          <SlideImage
            isImage={true}
            imageSrc={SlideImg02}
            heroTitle="Flame Dates"
            heroPara={heroParaTwo}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            leftAlignmentTxt={true}
            heroSubTitle={heroSubtxt}
            btnTxt="Coming Soon"
            mobileMockup={true}
          />
          <SlideImage
            isVideo={true}
            videoSrc={SlideVideo2}
            heroTitle="Flame Journeys"
            heroPara={heroParaThree}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            centerAlignmentTxt={true}
            heroSubTitle={false}
            btnTxt="Get Started"
          />
          <SlideImage
            isImage={true}
            imageSrc={SlideImg04}
            heroTitle='Flame Moments'
            heroPara={heroParaFour}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            leftAlignmentTxt={true}
            heroSubTitle={false}
            btnTxt="Coming Soon"
            mobileMockup={false}

          />
          <Footer/>
        </Box>
      </ReactLenis>
   
  );
};

export default Home;
