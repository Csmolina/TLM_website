import styled from "styled-components";
import John from "../../assets/john.png";
import Stefy from "../../assets/stefy.jpg";
import Sandra from "../../assets/sandra.jpg";
import Samya from "../../assets/samya.jpg";
import Katia from "../../assets/katia.jpeg";
import Lkd from "../../assets/linkedin_blue.svg";
export function Team() {
  return (
    <Container>
      <SecondContainer className="container col-xxl-8 px-4 py-5">
        <h1 className="titulo" style={{ fontSize: "3rem", marginTop: "5rem" }}>
          Nuestro Equipo <hr />
        </h1>
        <CardContainerEmp>
          <EmployeeCard>
            <EmployeeImg src={John}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>
                John Tindall BA (Hons) <br />
                Socio principal
              </EmployeeTitle>
              <EmployeeRole>
                BA (Hons) <br />
                Universidad de Westminster
              </EmployeeRole>
              <EmployeeRole>
                Contador Público <br />
                Instituto de Contadores Públicos de Escocia{" "}
              </EmployeeRole>
              <EmployeeInfo>
                15 años de experiencia auditando empresas del sector médico,
                industrias de consumo básico, operadores de centros comerciales,
                inmobiliarios, y organizaciones sin fines de lucro. <br />
                Operaciones relacionadas dentro y fuera del país. <br />
                John es el encargado de identificar oportunidades de crecimiento
                y colaborar con el equipo para asegurar el éxito de la firma.
              </EmployeeInfo>
              <a href="https://www.linkedin.com/in/john-tindall/">
                <Linkedin />
              </a>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Katia}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>
                Katia Molina CPA, MBA <br /> Gerente General
              </EmployeeTitle>
              <EmployeeRole>
                Ingeniera en Contabilidad y Auditoría CPA <br /> Pontificia
                Universidad Católica del Ecuador
              </EmployeeRole>
              <EmployeeRole>
                MBA <br />
                Universidad de Nebrija
              </EmployeeRole>
              <EmployeeInfo>
                Cuenta con más 10 años de experiencia auditando empresas
                mineras, manufactura de bienes esenciales, telecomunicaciones,
                empresas gubernamentales y organizaciones del sector financiero.{" "}
                <br /> Se encarga de la gestión y desarrollo del equipo de
                auditores, brindando capacitación, mentoría y oportunidades de
                crecimiento profesional. <br />
                Se encarga también de la revisión del sistema de control de
                calidad de auditoría de la firma.
              </EmployeeInfo>
              <a href="https://www.linkedin.com/in/katia-molina-auditor%C3%ADa-1709098a/">
                <Linkedin />
              </a>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Stefy}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>
                Stefany López CPA <br /> Gerente de Impuestos
              </EmployeeTitle>
              <EmployeeRole>
                Ingeniera en Contabilidad y Auditoria CPA <br />
                Pontificia Universidad Católica del Ecuador
              </EmployeeRole>
              <EmployeeRole>
                Finanzas y política fiscal <br /> Universidad de Corea
              </EmployeeRole>
              <EmployeeInfo>
                Cuenta con más de 8 años de experiencia en el área de impuestos.
                Es responsable de supervisar y dirigir todas las actividades
                relacionadas con los impuestos, tanto a nivel personal como
                empresarial. <br />
                También se encarga de mantenerse actualizada con los cambios en
                las leyes fiscales y proporcionar asesoramiento financiero en
                temas fiscales a los clientes de la firma.
              </EmployeeInfo>
              <a href="https://www.linkedin.com/in/stefanyl%C3%B3pezsociotaxmanagment/">
                <Linkedin />
              </a>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Sandra}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>
                Sandra Morales CPA <br /> Gerente de Auditoría
              </EmployeeTitle>
              <EmployeeRole>
                Ingeniera en Contabilidad y Auditoria CPA <br /> Universidad
                Central del Ecuador
              </EmployeeRole>
              <EmployeeInfo>
                8 años de experiencia auditando empresas del sector médico, de
                servicios y de manufactura de bienes esenciales. <br />
                Es la encargada de liderar y supervisar el equipo de auditores
                de la firma. Su función principal es garantizar la ejecución
                eficiente y efectiva de las auditorías internas o externas.
              </EmployeeInfo>
              <a href="https://www.linkedin.com/in/sandra-morales-cpa-contabilidad-y-auditoria-51a05484/">
                <Linkedin />
              </a>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Samya}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>
                Samya Lozano CPA <br />
                Gerente de Outsourcing Contable
              </EmployeeTitle>
              <EmployeeRole>
                Ingeniera en Contabilidad y Auditoria CPA <br /> Pontificia
                Universidad Católica del Ecuador
              </EmployeeRole>
              <EmployeeInfo>
                Inició su carrera en el área de auditoría de TLM Royal, pasando
                posteriormente al área de outsourcing contable. Cuenta con más
                de 5 años de experiencia liderando la contabilidad de nuestros
                clientes. <br />
                Es responsable de establecer y mantener una comunicación
                efectiva con los clientes para entender sus necesidades
                contables y adaptar los servicios de acuerdo con sus
                requerimientos. <br />
                Además, se encarga de asegurar el cumplimiento de las normativas
                contables y fiscales aplicables, y de mantener una alta calidad
                en el servicio prestado.
              </EmployeeInfo>
              <a href="https://www.linkedin.com/in/samya-lozano-uribe-aaa074215/">
                <Linkedin />
              </a>
            </EmployeeDesc>
          </EmployeeCard>
        </CardContainerEmp>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-color: #1f1f1f;

  color: white;
  padding-bottom: 5rem;
  @media (max-width: 560px) {
    padding: 0;
  }
  .titulo {
    @media (min-width: 65em) {
      hr {
        display: none;
      }
    }
  }
`;
const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 560px) {
    h1 {
      font-size: 2rem !important;
    }
  }
`;
const EmployeeCard = styled.div`
  display: grid;

  grid-template-columns: 30% auto;
  margin-bottom: 4rem;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    border-bottom: 0.1rem solid #e2e1e211;
    gap: 2rem;
  }
  gap: 4rem;
`;
const CardContainerEmp = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;

  @media (max-width: 560px) {
    grid-template-columns: auto;
    margin: 3rem 0 0 0;
  }
  gap: 3rem;
`;
const EmployeeImg = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: none;
    transition: all 0.2s ease;
  }

  transform: scale(1);
  transition: all 0.2s ease;
  @media (max-width: 560px) {
    width: 70%;
    &:hover {
      transform: scale(1);
    }
  }
`;
const EmployeeDesc = styled.div``;
const EmployeeTitle = styled.h4`
  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;
const EmployeeRole = styled.h6`
  color: #e1e0e0;
  @media (max-width: 64em) {
    font-size: 1.1rem;
  }
`;
const EmployeeInfo = styled.h6`
  color: #cbcbcb;
  @media (max-width: 64em) {
    font-size: 1rem;
  }
`;
const Linkedin = styled.button`
  width: 1.2vw;
  height: 1.2vw;
  background-image: url(${Lkd});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  &:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: none;
    transition: all 0.2s ease;
  }

  transform: scale(1);
  transition: all 0.2s ease;
  @media (max-width: 64em) {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    width: 10vw;
    height: 10vw;
    background-size: cover;
  }
`;
