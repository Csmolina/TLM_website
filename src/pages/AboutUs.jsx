import styled from "styled-components";
import { Aboutus_first } from "../components/AboutUs/Aboutus_first";
import { Objectives } from "../components/AboutUs/Objectives";
import { Team } from "../components/AboutUs/Team";
import { SwiperAbout } from "../components/AboutUs/SwiperAbout";
export function Aboutus() {
  return (
    <Container>
      <Aboutus_first />
      <Objectives />
      <Team />
      <SwiperAbout />
    </Container>
  );
}
const Container = styled.div``;
