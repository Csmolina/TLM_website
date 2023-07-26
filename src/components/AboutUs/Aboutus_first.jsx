import styled from "styled-components";
import AboutImage from "../../assets/Aboutus.jpg";
import AboutImageMobile from "../../assets/Aboutusmini.jpg";
export function Aboutus_first() {
  return (
    <Container>
      <Fade>
        {" "}
        <SecondContainer className="container col-xxl-8 px-4 py-5">
          <div
            className="row flex-lg-row align-items-center g-5 py-5"
            
          >
            <div className="col-lg-6 align-items-center">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Celebrando Nuestras Raíces
              </h1>
              <p className="lead" style={{}}>
                TLM Royal tiene sus raíces con más de 16 años de experiencia. Le
                invitamos a ser parte de nuestra historia de éxito. <br />{" "}
                <br /> Nuestra fuerza proviene de nuestros profesionales. Le
                invitamos a comunicarse y ver la diferencia que podemos
                brindarle.
              </p>
            </div>
          </div>
        </SecondContainer>
      </Fade>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${AboutImage});
  background-repeat: no-repeat;
  background-size: cover;
 
  @media (max-width: 560px) {
    background-image: url(${AboutImageMobile});
 
  }
`;
const SecondContainer = styled.div`
  color: #c5c5c5;
  .text-body-emphasis {
    color: white !important;
    font-size: 3.5rem !important;
  }
  @media (max-width: 560px) {
    .text-body-emphasis {
    color: white !important;
    font-size: 2rem !important;
  }
  .lead{
    font-size: 1rem;
  }

  }
`;
const Fade = styled.div`
padding: 5rem 0 5rem 0;
  width: 100%;
  background-color: #00000087;
  z-index: 1;
  @media (max-width: 560px) {
    padding: 0;
  }
`;
