import styled from "styled-components";
export function ChooseAudit() {
  return (
    <Container className="container">
      <TextContainer>
        <Title>¿Por qué elegirnos?</Title>
        <Text>
          Creemos en la comunicación continua, la acción proactiva y en ofrecer
          un servicio duradero con nuestro cliente, a precios razonables.
        </Text>
      </TextContainer>
      <TextContainer>
        <Title>Personal calificado</Title>
        <Text>
          Los servicios presentados de auditoría son interna y externa entre
          otros. Nuestros expertos son bilingües y mantienen una gran
          experiencia en el ámbito de la auditoría.
        </Text>
      </TextContainer>
      <TextContainer>
        <Title>Trabajo de calidad</Title>
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
  margin-top: 10rem;
  margin-bottom: 10rem;
  gap: 3rem;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div``;
const Title = styled.h2`
  margin-bottom: 2rem;
  font-weight: 600;
`;
const Text = styled.p``;
