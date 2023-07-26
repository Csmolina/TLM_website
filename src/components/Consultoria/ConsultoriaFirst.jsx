import styled from "styled-components";
import ConsultImage from "../../assets/outdoor.png";
import ConsultImageMobile from "../../assets/outdoormobile.png";
export function ConsultoriaFirst() {
  return (
    <Container>
      {" "}
      <SecondContainer className="container">
        <TextContainer className="col-lg-12 align-items-center">
          <h1>Servicios de Consultoría </h1>
          <p className="lead">
          En TLM Royal, ofrecemos servicios de consultoría personalizados para satisfacer tus necesidades específicas. Nuestro equipo de consultores altamente capacitados está listo para brindarte soluciones estratégicas y prácticas. <br />
          Ya sea que necesites asesoramiento en gestión, planificación estratégica, optimización de procesos o cualquier otro aspecto empresarial, estamos aquí para ayudarte. Nuestra consultoría te permitirá tomar decisiones informadas y alcanzar tus objetivos con éxito. 

          </p>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${ConsultImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${ConsultImageMobile});
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
