import styled from "styled-components";
export function Objectives() {
  return (
    <Container>
      <SecondContainer className="container col-xxl-8 px-4 py-5">
        <ContainerText>
          <Title>Objetivos Clave</Title>
          <SubTitle>"Una Mirada Fresca al Servicio"</SubTitle>
        </ContainerText>
        <CardContainer>
          <Card style={{ backgroundColor: "#33004B" }}>
            <CardTitle style={{ color: "#ebebeb" }}>Comunicación</CardTitle>
            <CardText style={{ color: "#c1c0c0" }}>
              Continua, accesible, comprensible durante todo el año, para
              obtener asesoramiento, una segunda opinión o una solución para un
              problema particular.
            </CardText>
          </Card>
          <Card style={{ backgroundColor: "#f5982d" }}>
            <CardTitle>Soluciones</CardTitle>
            <CardText>
              Consejos y recomendaciones relevantes, prácticos y oportunos para
              ayudar a mejorar su negocio.
            </CardText>
          </Card>
          <Card style={{ backgroundColor: "#007e90" }}>
            <CardTitle style={{ color: "#ebebeb" }}>Su negocio</CardTitle>
            <CardText style={{ color: "#c1c0c0" }}>
              Estamos dedicados a comprender sus operaciones, sus objetivos, sus
              riesgos y su desempeño. Para darle un servicio individual,
              relevante y dirigido.
            </CardText>
          </Card>
        </CardContainer>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div``;
const SecondContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContainerText = styled.div``;
const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;
const SubTitle = styled.h4`
  text-align: end;
  @media (max-width: 560px) {
    text-align: start;
  }
`;
const CardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  height: 40vh;
  width: 35vh;
  padding: 2rem;
  display: grid;
  grid-template-rows: 40% auto;
  box-shadow: 6px 6px 22px #afaeae, -6px -6px 22px #ffffff;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: none;
    transition: all 0.2s ease;
  }

  transform: scale(1);
  transition: all 0.2s ease;

  @media (max-width: 560px) {
    margin-top: 4rem;
    height: 60vh;
    width: 100%;
  }
`;
const CardTitle = styled.h2`
  text-align: start;
  width: 100%;
  font-weight: 700;
  height: auto;
  display: flex;
  align-items: center;
`;
const CardText = styled.p`
  font-size: 1.25rem;
`;
