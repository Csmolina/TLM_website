import styled from "styled-components";
import { Contact_first } from "../components/Contact/Contact_first";
import { Contact_info } from "../components/Contact/Contact_info";
import { MapTLM } from "../components/Contact/Map";
import { Form } from "../components/Contact/Form";
export function Contact() {
  return (
    <Container>
      <Contact_first />
      <Contact_info />
      <MapTLM />
      <Form />
    </Container>
  );
}
const Container = styled.div``;
