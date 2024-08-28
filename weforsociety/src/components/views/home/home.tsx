import React from "react";
import SliderHome from "../../utils/slider2";
import Header from "../../utils/header";
import AboutUs from "./aboutSection2";
import TeamMember from "./members";
import { Bounce, Fade, Zoom } from 'react-awesome-reveal'; // Import the animations you want to use

const Home = () => {
  return (
    <>
      {/* <Zoom duration={1000}> Apply a fade animation with a duration of 1000ms */}
        <Header />
      {/* </Zoom> */}
      <Fade duration={500}> {/* Apply a zoom animation with a duration of 1000ms */}
        <SliderHome />
      </Fade>
      <Fade duration={500} delay={200}> {/* Apply a fade animation with a delay */}
        <AboutUs />
      </Fade>
      <Fade duration={500} delay={400}> {/* Apply a fade animation with a delay */}
        <TeamMember />
      </Fade>
    </>
  );
};

export default Home;
