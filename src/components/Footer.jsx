import styled from "styled-components";
import logoblackwhite from "../assets/TLM_black.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import "./Footer.css";
export function Footer() {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={logoblackwhite}
              alt="logo black and white"
              height={100}
              className="logo"
            />

            <p>
            Nuestro equipo de profesionales comprometidos está listo para ayudarte con soluciones personalizadas que garantizarán el cumplimiento y la transparencia en tus operaciones. 

            </p>
          </div>
          <div className="col-md-1">
            <h5></h5>
            <ul className="list-unstyled esconder">
              <li>Teléfono:</li>
              <li>
                <a
                  href="mailto:tlmroyal@tlmroyal.com"
                  className="link-light text-decoration-none"
                >
                  correo:{" "}
                </a>
              </li>
              <li>Dirección: </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5></h5>
            <ul className="list-unstyled">
              <li>023330529</li>
              <li></li>
              <li>
                <a
                  href="mailto:tlmroyal@tlmroyal.com"
                  className="link-light text-decoration-none"
                >
                  info@tlmroyal.com
                </a>
              </li>
              <li>Av. 6 de diciembre E10-20 y Portugal</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/tlmroyal/" target="_blank">
                  {" "}
                  <img src={instagram} alt="instagram" height={"40px"} className="social"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/TLMRoyal" target="_blank">
                  {" "}
                  <img src={facebook} alt="facebook" height={"40px"}  className="social"/>
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a href="https://twitter.com/TLMRoyal" target="_blank">
                  {" "}
                  <img src={twitter} alt="twitter" height={"40px"} className="social"/>
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a href="https://youtube.com/@tlmroyal4371" target="_blank">
                  {" "}
                  <img src={youtube} alt="youtube" height={"40px"} className="social"/>
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  href="https://www.linkedin.com/company/tlmroyal/"
                  target="_blank"
                >
                  {" "}
                  <img src={linkedin} alt="linkedin" height={"40px"} className="social"/>
                </a>
              </li>
            </ul>

            <p>
            
Confía en nuestra experiencia y precisión para brindarte servicios que impulsarán la salud financiera de tu empresa.
            </p>
          </div>
        </div>
        <hr />
        <p className="text-center">
          © {new Date().getFullYear()} TLM Royal. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
