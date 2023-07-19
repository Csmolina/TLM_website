import styled from "styled-components";
import { Auditoria_first } from "../components/Auditoria/Auditoria_first";
import { ChooseAudit } from "../components/Auditoria/ChooseAudit";
import { Audit_separated } from "../components/Auditoria/Audit_separated";
import { Alcance_audit } from "../components/Auditoria/Alcance_audit";
import { AuditFinal } from "../components/Auditoria/AuditFinal";
export function Auditoria() {
  return (
    <Container>
      <Auditoria_first />
      <ChooseAudit />
      <Audit_separated
        title="Auditoría externa"
        firsttext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl urna, ultricies eget elementum quis, tempor vel odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi efficitur justo eget turpis faucibus consectetur. Ut auctor dui sit amet elementum bibendum."
        secondtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl urna, ultricies eget elementum quis, tempor vel odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi efficitur justo eget turpis faucibus consectetur. Ut auctor dui sit amet elementum bibendum."
        background="#1F1F1F"
        color="#d1d1d1"
        colortitle="#f8f8f8"
        hrcolor="#c89c0a"
      />
      <Alcance_audit />
      <Audit_separated
        title="Sistemas de Auditoría Financiera"
        firsttext="Nuestro sistema de auditoria cuenta con una suscripción con Mercia Group y Willmington Professional, una Compañía en Londres, que nos proporciona actualizaciones técnicas, manuales de auditoría actualizados, mejoras en las prácticas sistemáticas que garantizan procedimientos de auditoría con altos estándares globales"
        secondtext="Nuestros sistemas están hechos a medida y diseñados para nuestras operaciones, son eficientes y adaptables. Usamos Google Cloud Platform para alojar nuestro sistema de auditoría principal y Amazon Web Services para nuestro análisis de big data."
        background="#e0e0e079"
        color="#444444"
        colortitle="#000000"
        hrcolor="#33004B"
      />
      <AuditFinal />
    </Container>
  );
}
const Container = styled.div``;
