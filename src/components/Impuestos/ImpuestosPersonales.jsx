import styled from "styled-components";
import TaxImage from "../../assets/taxwoman.jpg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Tax from "../../assets/tax.json";
import Tax1 from "../../assets/tax1.json";
export function ImpuestosPersonales() {
  return (
    <Container className="container">
      <Title>Impuestos Personales</Title> <hr />
      <SubContainer>
        <GridFirst>
          {" "}
          <Section>
            <SubTitle>Declaraciones de Impuestos</SubTitle>
            <Text>
              Las personas que generan ingresos fuera del régimen tributario de
              pago a medida que ganan, deben presentar declaraciones de
              impuestos regulares además de una declaración de impuestos anual.
            </Text>
          </Section>
          <Section>
            <SubTitle>Devoluciones de Impuestos</SubTitle>
            <Text>
              <ul>
                <li>Declaración Anual de Impuestos.</li>
                <li>Declaración de Bienes.</li>
                <li>Vehículo.</li>
                <li>Herencia.</li>
                <li>Gastos Anuales.</li>
              </ul>
            </Text>
            <Text>
              Para obtener más información, consultar con uno de nuestros
              especialistas en impuestos personales.
            </Text>
          </Section>
          <ImgSectionFirst>
          <Player autoplay loop src={Tax}>
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          </ImgSectionFirst>
        </GridFirst>
        <GridSecond>
          {" "}
          <ImgSectionSecond>
          <Player autoplay loop src={Tax1} >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          </ImgSectionSecond>
          <Section>
            <SubTitle>Planificación tributaria</SubTitle>
            <Text>
            La planificación tributaria es una estrategia financiera legal y ética que las personas utilizan para minimizar su carga impositiva. 
            </Text>
            <Text>
            Consiste en identificar oportunidades y utilizar tácticas fiscales permitidas por las leyes para reducir los impuestos pagados. 
            </Text>
          </Section>
        </GridSecond>
      </SubContainer>
    </Container>
  );
}
const Container = styled.div``;
const Title = styled.h1`
  margin: 5rem 0 1rem 0;
  font-weight: 800;
  @media (max-width: 560px) {
font-size: 2rem;

  }
`;
const SubContainer = styled.div`
margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:10rem;
  @media (max-width: 560px) {
   display: flex;
   flex-direction: column;
   gap:0;
  }
`;
const SubTitle = styled.h2`
margin-bottom: 1rem;
`;
const Text = styled.p`
 @media (max-width: 560px) {
font-size: 1rem;

  }
`;
const Section = styled.div`
margin-bottom: 3rem;
`;
const ImgSectionFirst = styled.div`margin-bottom: 5rem;
width: 30vh;
@media (max-width: 560px) {
   width: 65%;

  }
`;
const ImgSectionSecond = styled.div`margin-bottom: 5rem;
width: 50vh;
@media (max-width: 560px) {
   width: 90%
  }
`;
const GridFirst = styled.div``;
const GridSecond = styled.div`

@media (max-width: 560px) {
   display: flex;
   flex-direction: column-reverse;
  }`;
