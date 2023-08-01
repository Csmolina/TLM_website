import styled from "styled-components";
import { ImpuestoFirst } from "../components/Impuestos/ImpuestosFirst";
import { ImpuestosSwiper } from "../components/Impuestos/ImpuestosSwiper";
import { ImpuestosPersonales } from "../components/Impuestos/ImpuestosPersonales";
import { motion as m } from "framer-motion";
export function Impuestos() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <ImpuestoFirst />
      <ImpuestosSwiper />
      <ImpuestosPersonales />
    </m.Container>
  );
}
const Container = styled.div``;
