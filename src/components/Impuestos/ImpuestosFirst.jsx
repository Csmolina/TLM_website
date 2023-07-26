import styled from "styled-components";
import TaxImage from "../../assets/taxwoman.jpg";
import TaxImageMobile from "../../assets/taxwomanmobile.jpg";
export function ImpuestoFirst() {
  return (
    <Container>
      {" "}
      <SecondContainer className="container">
        <TextContainer className="col-lg-12 align-items-center">
          <h1>Expertos en Impuestos Personales y Empresariales</h1>
          <p className="lead">
          En TLM Royal, contamos con expertos en impuestos personales y empresariales que brindan soluciones personalizadas para maximizar deducciones, minimizar obligaciones fiscales y asegurar el cumplimiento normativo. Confía en nuestro equipo para una gestión financiera y fiscal efectiva y enfócate en el crecimiento personal o empresarial.
          </p>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${TaxImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${TaxImageMobile});
  }
`;
const SecondContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #c5c5c5;
  .text-body-emphasis {
    color: white !important;
    font-size: 3.5rem;
  }
`;
const TextContainer = styled.div`
  background-color: #000000a6;
  p {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
  h1 {
    color: white;
    font-size: 3.5rem;
  }
  padding: 10rem;
  border-radius: 10px;
  @media (max-width: 560px) {
    padding: 2rem;
    h1 {
      font-size: 2rem;
    }
    p {
      width: 100%;
      font-size: 1rem;
    }
  }
`;
