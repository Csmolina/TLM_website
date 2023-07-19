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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Morbi efficitur justo eget turpis faucibus
            consectetur. Ut auctor dui sit amet elementum bibendum.
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
    font-size: 1.5rem;
  }
  h1 {
    color: white;
    font-size: 3.5rem;
  }
  padding: 10rem;
  border-radius: 10px;
  @media (max-width: 560px) {
    padding: 4rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;
