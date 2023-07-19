import styled from "styled-components";
import Team from "../../assets/team.jpg";
import Team1 from "../../assets/team1.jpg";
export function AuditFinal() {
  return (
    <Container>
      <Fade>
        <SubContainer className="container">
          <Title>¿Por Qué Trabajar Con Nosotros? <hr /></Title>
         
          <Text>
            Nuestro equipo tiene experiencia trabajando con organizaciones
            privadas y gubernamentales en auditoría interna.
          </Text>
          <Text>
            Nuestro objetivo es revisar áreas, procesos y procedimientos.
            Identificar debilidades, errores e inconsistencias que ayudan a
            mejorar, fortalecer y agilizar el entorno operativo.
          </Text>
          <Text>
            Nuestros expertos pueden discutir la estrategia, el alcance y los
            objetivos de una auditoría interna en una consulta gratuita.
          </Text>
        </SubContainer>
      </Fade>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${Team});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${Team1});
  }
`;
const SubContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;
const Fade = styled.div`
  background-color: #000000bc;
`;
const Title = styled.h1`
  color: white;
  width: 100%;
  margin-bottom: 5rem;
  @media (max-width: 560px) {
    width: 100%;
  }
  font-size: 3rem;
`;
const Text = styled.p`
  color: #c7c7c7;
  width: 70%;
  margin-bottom: 3rem;
  font-size: 1.3rem;
  @media (max-width: 560px) {
    width: 100%;
  }
`;
