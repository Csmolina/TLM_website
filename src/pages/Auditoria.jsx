import styled from "styled-components";
import { Auditoria_first } from "../components/Auditoria/Auditoria_first";
import { ChooseAudit } from "../components/Auditoria/ChooseAudit";
import { Audit_separated } from "../components/Auditoria/Audit_separated";
import { Alcance_audit } from "../components/Auditoria/Alcance_audit";
import { AuditFinal } from "../components/Auditoria/AuditFinal";
import { motion as m } from "framer-motion";
export function Auditoria() {
  return (
    <m.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Auditoria_first />
      <ChooseAudit />
      <Audit_separated
        title="Auditoría externa"
        firsttext="Nuestros profesionales, conocidos como auditores externos, son expertos en contabilidad, finanzas y aspectos legales relevantes. Nuestros auditores revisan minuciosamente los registros contables, transacciones financieras, políticas y procedimientos internos para asegurarse de que se adhieran a las normas contables y regulatorias aplicables."
        secondtext="La auditoría externa es un proceso esencial para proporcionar confianza a inversores, accionistas, prestamistas y otras partes interesadas sobre la precisión y veracidad de la información financiera y operativa de una organización. Es un componente crucial para el buen gobierno corporativo y el mantenimiento de la transparencia en el ámbito empresarial."
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
    </m.Container>
  );
}
const Container = styled.div``;
