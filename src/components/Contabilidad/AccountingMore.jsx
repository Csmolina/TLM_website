import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Accounting from "../../assets/accountinganimation.json";
export function AccountingMore() {
  return (
    <Back>
      <Container className="container">
        <Image>
          {" "}
          <Player autoplay loop src={Accounting}>
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </Image>

        <TextContainer>
          <SubTitle>
            Una Asistencia Sin Estrés Para La Constitución De La Empresa
            <hr />
          </SubTitle>
          <Text>
            Asistimos en la constitución de empresas dentro de Ecuador. TLM
            Royal puede asesorar sobre las estructuras legales más adecuadas
            para constituir su empresa, costos, administración y obligaciones.
            <br /> <br />
            También podemos proporcionar representación legal a su empresa,
            además de garantizar el cumplimiento legal y contable con los
            reguladores relevantes.
          </Text>
          <SubTitle>Soluciones Para Su Situación <hr /></SubTitle>
          <Text>
            Trabajamos con nuestros clientes utilizando un software de
            contabilidad existente y eficiente. Nuestro personal está capacitado
            para el manejo de varios sistemas contables diferentes y pueden
            integrarse a su ritmo de trabajo.
            <br /> <br />
            También trabajamos con clientes implementando nuevas soluciones
            contables. Tenemos términos de referencia con proveedores de
            software de contabilidad basados en la nube, ideales para pequeñas
            empresas que inician sus operaciones. Para empresas más grandes,
            trabajamos con varios proveedores para brindar servicios
            especializados a medida.{" "}
          </Text>
        </TextContainer>
      </Container>
    </Back>
  );
}
const Container = styled.div`
  display: flex;
  gap: 20rem;
  padding: 5rem 0 5rem 0;
  @media (max-width: 560px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;
const TextContainer = styled.div``;
const SubTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 3rem;
  @media (max-width: 560px) {
    padding-left: 1rem;
    font-size: 2rem;
  }
`;
const Text = styled.p`
  margin-bottom: 3rem;
  @media (max-width: 560px) {
    padding-left: 1rem;
    font-size: 1rem;
  }
`;
const Back = styled.div`
  background-color: #e0e0e068;
`;
const Image = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 560px) {
    width: 60%;

    padding-left: 1rem;
  }
`;
