import styled from "styled-components";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
export function Hamburguer() {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };
  return (
    <Section id="navigation">
      <Link to="/">
        {" "}
        <img src={Logo} alt="" height={"100rem"} style={{ padding: "1rem" }} />
      </Link>

      <NavBar>
        <HamburgerMenu
          click={click}
          onClick={() => setClick(!click)}
        ></HamburgerMenu>
        <Menu click={click}>
          <MenuItem>
            <a href="/">Inicio</a>
          </MenuItem>
          <MenuItem style={{ pointerEvents: "none" }}>
            Servicios
            <ListaServicios>
              <ItemLista>
                <Link></Link>
                <a href="/Servicios/Auditoria">Auditoría</a>
              </ItemLista>
              <ItemLista>
                <a href="/Servicios/Contabilidad">Contabilidad</a>
              </ItemLista>
              <ItemLista>
                <a href="/Servicios/Impuestos">Impuestos</a>
              </ItemLista>
              <ItemLista>
                <a href="/Servicios/Consultoria">Consultoría</a>
              </ItemLista>
            </ListaServicios>
          </MenuItem>
          <MenuItem>
            <a href="/Acerca">Acerca De Nosotros</a>
          </MenuItem>
          <MenuItem>
            <a href="/Contacto">Contáctenos</a>
          </MenuItem>
        </Menu>
      </NavBar>
    </Section>
  );
}
const ListaServicios = styled.ul`
  list-style-type: none;
  a {
    text-decoration: none;
    color: #a4a4a4 !important;
  }
`;
const ItemLista = styled.li`
  margin-top: 1rem;
  padding: 0;
  pointer-events: all;
`;
const Section = styled.section`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 2;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
const NavBar = styled.nav`
  font-size: 1.75em;
  height: 5rem;
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;

  list-style: none;
  @media (max-width: 64em) {
    position: fixed;
    top: 6rem;
    left: 0;
    right: 0;

    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: rgba(4, 4, 4, 0.966);
    backdrop-gilter: blur(2px);
    transform: ${(props) =>
      props.click ? "translateX(0)" : "translateX(1000%)"};
    transition: all 0.4s ease;
    flex-direction: column;
    height: 100vh;

    touch-action: none;
  }
`;
const MenuItem = styled.li`
  margin-top: 1.5rem;
  color: #fcfcfc;
  cursor: pointer;
  font-size: 1.25em;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #33004b;
    transition: width 0.4s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 64em) {
    font-size: 1em;
    &::after {
      display: none;
    }
  }
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: #33004b;
  position: absolute;
  top: 3rem;
  left: 90%;

  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;

  cursor: pointer;
  transition: all 0.4s ease;
  @media (max-width: 64em) {
    display: flex;
  }
  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: #33004b;
    position: absolute;
    transition: all 0.4s ease;
  }
  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;
