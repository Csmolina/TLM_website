import styled from "styled-components";
import { ConsultoriaFirst } from "../components/Consultoria/ConsultoriaFirst";
import { ConsultoriaExplained } from "../components/Consultoria/ConsultoriaExplained";
import { motion as m } from "framer-motion";
export function Consultoria() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <ConsultoriaFirst />
      <ConsultoriaExplained />
    </m.Container>
  );
}
const Container = styled.div``;
