import styled from "styled-components";
import AuditoriaImage from "../../assets/auditservice.jpg";
export function Auditoria_first() {
  return (
    <Container>
      {" "}
      <SecondContainer className="container">
        <TextContainer className="col-lg-12 align-items-center">
          <h1>Auditoría y Aseguramiento</h1>
          <p className="lead">
          La auditoría se enfoca en la revisión y evaluación de la información y procesos para determinar su exactitud y cumplimiento con normas. Es la evaluación independiente y objetiva para brindar confianza sobre la calidad y cumplimiento de ciertos aspectos. La auditoría y el aseguramiento son importantes para garantizar la integridad y fiabilidad de la información financiera.
          </p>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${AuditoriaImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${AuditoriaImage});
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
      font-size: 1rem;
      width: 100%;
    }
  }
`;
