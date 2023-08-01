import styled from "styled-components";
import { ContabilidadFirst } from "../components/Contabilidad/ContabilidadFirst";
import { AccountingSolutions } from "../components/Contabilidad/AccountingSolutions";
import { AccountingMore } from "../components/Contabilidad/AccountingMore";
import { motion as m } from "framer-motion";
export function Contabilidad() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <ContabilidadFirst />
      <AccountingSolutions />
      <AccountingMore />
    </m.Container>
  );
}
const Container = styled.div``;
