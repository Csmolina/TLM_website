import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import AnimationAccounting from "../../assets/73985-colleagues-working-together.json";
export function FirstInfo() {
  return (
    <Container>
      <div className="container col-xxl-8 col-sm-12  py-5">
        <div className="row flex-xl-row-reverse g-5 py-5">
          <div className=" col-sm-12 col-lg-8">
            <Player autoplay loop src={AnimationAccounting}>
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h1 id="title"
              className="display-3 fw-bold  col-sm-12 text-body-emphasis lh-1 mb-3"
              style={{ fontSize: "3rem" }}
            >
              Expertos en Negocios y Finanzas
            </h1>
            <p className="lead" style={{ padding: "0", marginTop: "1.5rem" }}>
              Bienvenido a TLM Royal, somos expertos en negocios y finanzas,
              auditoría, impuestos & contabilidad con sede en Quito, Ecuador.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/Acerca">
                <BtnConocer
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 "
                >
                  Conocer Más
                </BtnConocer>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.lead{
  @media (max-width: 560px) {
   font-size: 1rem;

  }
}
#title{

  @media (max-width: 560px) {
   font-size: 2rem !important;

  }
}
`;
const BtnConocer = styled.button`
@media (max-width: 560px) {
   width: 100%;
font-size: 1rem;
  }
  background-color: #33004b;
  outline: none;
  margin-top: 2rem;
  border: none;
  padding: 0.9rem 2.3rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    transform: scale(0.9);
    background-color: #33004be7 !important;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #33004b;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  --bs-btn-active-bg: #552071;
`;
