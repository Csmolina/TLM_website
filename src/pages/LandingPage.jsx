import styled from "styled-components";

import { Linkedin } from "../components/LandingPage/linkedin";
import { CarouselPage } from "../components/LandingPage/CarouselPage";
import { FirstInfo } from "../components/LandingPage/FirstInfo";
import { Chooseus } from "../components/LandingPage/Chooseus";
import { Testimonial } from "../components/LandingPage/Testimonial";
export function LandingPage() {
  return (
    <Container>
      <FirstInfo />
      <CarouselPage />
      <Chooseus />
      <Testimonial />
      <Linkedin />
    </Container>
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
