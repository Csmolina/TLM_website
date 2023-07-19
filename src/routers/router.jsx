import {  Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Aboutus } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import { Auditoria } from "../pages/Auditoria";
import { Contabilidad } from "../pages/Contabilidad";
import { Impuestos } from "../pages/Impuestos";
import { Consultoria } from "../pages/Consultoria";
export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Acerca" element={<Aboutus />} />
      <Route path="/Contacto" element={<Contact />} />
      <Route path="/Servicios/Auditoria" element={<Auditoria />} />
      <Route path="/Servicios/Contabilidad" element={<Contabilidad />} />
      <Route path="/Servicios/Impuestos" element={<Impuestos />} />
      <Route path="/Servicios/Consultoria" element={<Consultoria />} />
    </Routes>
  );
}
