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
      exit={{ opacity: 0 }}
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
`;
