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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus fermentum felis, ac eleifend odio vestibulum nec.
            </p>
          </div>
          <div className="col-md-1">
            <h5></h5>
            <ul className="list-unstyled">
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
              <li>00000000</li>
              <li>
                <a
                  href="mailto:tlmroyal@tlmroyal.com"
                  className="link-light text-decoration-none"
                >
                  tlmroyal@tlmroyal.com
                </a>
              </li>
              <li>123 W 4 St, New York, NY 12345</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/tlmroyal/" target="_blank">
                  {" "}
                  <img src={instagram} alt="sdsd" height={"40px"} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/TLMRoyal" target="_blank">
                  {" "}
                  <img src={facebook} alt="sdsd" height={"40px"} />
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a href="https://twitter.com/TLMRoyal" target="_blank">
                  {" "}
                  <img src={twitter} alt="sdsd" height={"40px"} />
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a href="https://youtube.com/@tlmroyal4371" target="_blank">
                  {" "}
                  <img src={youtube} alt="sdsd" height={"40px"} />
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  href="https://www.linkedin.com/company/tlmroyal/"
                  target="_blank"
                >
                  {" "}
                  <img src={linkedin} alt="sdsd" height={"40px"} />
                </a>
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              convallis pellentesque metus id lacinia.
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
