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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et convallis mauris. Suspendisse aliquet at mauris sit amet consequat. Nam semper, massa at euismod dignissim, erat odio semper metus, eu efficitur orci eros ac risus. In blandit tortor id ligula aliquam scelerisque.
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
