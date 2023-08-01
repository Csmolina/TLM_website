import styled from "styled-components";

import { Linkedin } from "../components/LandingPage/linkedin";
import { CarouselPage } from "../components/LandingPage/CarouselPage";
import { FirstInfo } from "../components/LandingPage/FirstInfo";
import { Chooseus } from "../components/LandingPage/Chooseus";
import { Testimonial } from "../components/LandingPage/Testimonial";
import { motion as m } from "framer-motion";
export function LandingPage() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease:"easeOut" }}
      exit={{opacity:0}}
    >
      <FirstInfo />
      <CarouselPage />
      <Chooseus />
      <Testimonial />
      <Linkedin />
    </m.Container>
  );
}
const Container = styled.div`
  background-image: url("../assets/");

  .container {
    //margin: 0 !important;
    width: 100% !important;
    .col-10 {
      //background-color: blue;
    }
  }
`;
