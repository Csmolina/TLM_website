import styled from "styled-components";
import { ContabilidadFirst } from "../components/Contabilidad/ContabilidadFirst";
import { AccountingSolutions } from "../components/Contabilidad/AccountingSolutions";
import { AccountingMore } from "../components/Contabilidad/AccountingMore";
export function Contabilidad() {
  return (
    <Container>
      <ContabilidadFirst />
      <AccountingSolutions />
      <AccountingMore />
    </Container>
  );
}
const Container = styled.div``;
