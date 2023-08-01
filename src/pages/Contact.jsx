import styled from "styled-components";
import { Contact_first } from "../components/Contact/Contact_first";
import { Contact_info } from "../components/Contact/Contact_info";
import { MapTLM } from "../components/Contact/Map";
import { Form } from "../components/Contact/Form";
import { motion as m } from "framer-motion";
export function Contact() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Contact_first />
      <Contact_info />
      <MapTLM />
      <Form />
    </m.Container>
  );
}
const Container = styled.div``;
