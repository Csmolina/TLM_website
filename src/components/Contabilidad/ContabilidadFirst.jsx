import styled from "styled-components";
import AccountingImage from "../../assets/accounting.jpg";
import AccountingImageMobile from "../../assets/accountingmobile.jpg";
export function ContabilidadFirst() {
  return (
    <Container>
      {" "}
      <SecondContainer className="container">
        <TextContainer className="col-lg-12 align-items-center">
          <h1>Servicios Completos De Contabilidad</h1>
          <p className="lead">
            TLM Royal ofrece servicios de contabilidad eficientes y de calidad a
            cada empresa. Tenemos la capacidad de administrar un departamento de
            contabilidad, dándole el tiempo y la libertad para concentrarse en
            las operaciones o proporcionar un nivel de servicio parcial que
            necesite.
          </p>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${AccountingImage});
    padding-top: 5rem;
  padding-bottom: 5rem;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${AccountingImageMobile});
  }
`;
const SecondContainer = styled.div`

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
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;
