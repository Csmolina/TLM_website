import styled from "styled-components";
export function Objectives() {
  return (
    <Container>
      <SecondContainer className="container col-xxl-8 px-4 py-5">
        <ContainerText>
          <Title>Objetivos Clave <hr /></Title>
          <SubTitle>"Una Mirada Fresca al Servicio"</SubTitle>
        </ContainerText>
        <CardContainer>
          <Card style={{ backgroundColor: "#33004B" }}>
            <CardTitle style={{ color: "#ebebeb" }}>Comunicación</CardTitle>
            <CardText style={{ color: "#c1c0c0" }}><hr />
              Continua, accesible, comprensible durante todo el año, para
              obtener asesoramiento, una segunda opinión o una solución para un
              problema particular.
            </CardText>
          </Card>
          <Card style={{ backgroundColor: "#f5982d" }}>
            <CardTitle>Soluciones</CardTitle> 
            <CardText><hr />
              Consejos y recomendaciones relevantes, prácticos y oportunos para
              ayudar a mejorar su negocio.
            </CardText>
          </Card>
          <Card style={{ backgroundColor: "#007e90" }}>
            <CardTitle style={{ color: "#ebebeb" }}>Su negocio</CardTitle>
            <CardText style={{ color: "#c1c0c0" }}><hr />
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
  font-size: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 64em) {
   font-size: 2rem;
  }
  @media (min-width: 65em) {
   hr{
    display: none;
   }
  }
`;
const SubTitle = styled.h4`
  text-align: end;
  @media (max-width: 560px) {
    text-align: start;
    font-size: 1rem;
  }
`;
const CardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 560px) {
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 20% auto;
 padding: 3rem 3rem 6rem 3rem;
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
    margin-top: 1rem;
    height: 60vh;
    width: 100%;
    &:hover {
    transform: scale(1);
  }


  }
  @media (max-width: 1600px) {
    grid-template-rows: 20% auto;
    padding: 2rem 2rem 2rem 2rem;
  
}

`;
const CardTitle = styled.h2`
  text-align: start;
  width: 100%;
  font-weight: 700;
  height: auto;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;
const CardText = styled.p`
  font-size: 1.25rem;
  @media (max-width: 560px) {
   font-size: 1rem;
  }
`;
