import styled from "styled-components";
import { Aboutus_first } from "../components/AboutUs/Aboutus_first";
import { Objectives } from "../components/AboutUs/Objectives";
import { Team } from "../components/AboutUs/Team";
import { SwiperAbout } from "../components/AboutUs/SwiperAbout";
import { motion as m } from "framer-motion";
export function Aboutus() {
  return (
    <m.Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease:"easeOut" }}
    exit={{opacity:0}}
    >
      <Aboutus_first />
      <Objectives />
      <Team />
      <SwiperAbout />
    </m.Container>
  );
}
const Container = styled.div``;
