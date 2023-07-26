import styled from "styled-components";
export function Alcance_audit() {
  return (
    <Container className="container">
      <SectionTitle>Alcance de la Auditoría</SectionTitle>
      <TextContainer>
        <Text>
          El objetivo de nuestros servicios de auditoría es obtener una
          seguridad razonable sobre si los estados financieros están libres de
          errores materiales (debido a fraude o error), lo que nos permite
          formar y expresar una opinión sobre los estados financieros y
          comunicar nuestros hallazgos.
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>
          El alcance de una auditoría no constituye un encargo de aseguramiento
          con respecto a la viabilidad futura de la entidad auditada o sobre la
          eficiencia o eficacia de la entidad.
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>
          Nuestras auditorías se realizan de acuerdo con el uso de Normas
          Internacionales de Auditoría y las regulaciones locales aplicables.
        </Text>
      </TextContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding-top: 10rem;
  margin-bottom: 10rem;
  gap: 3rem;
  @media (max-width: 560px) {
    flex-direction: column;
    padding-top: 5rem;
    margin-bottom: 5rem;
    
  }
`;
const TextContainer = styled.div`
@media (max-width: 560px) {
   
    h1 {
  font-size: 2rem;
}
p {
  font-size: 1rem;
}
  }
`;

const Text = styled.p``;
const SectionTitle = styled.h1`
  width: 100%;
  font-weight: 700;
`;
