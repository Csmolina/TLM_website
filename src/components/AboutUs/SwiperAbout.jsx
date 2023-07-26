import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Back from "../../assets/sliderwoman.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperAbout.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export function SwiperAbout() {
  return (
    <Container>
      <Fade>
        {" "}
        <SubcontainerSwp className="container col-xxl-8 px-4 py-5">
          <Stitlecontainer>
            <h1 style={{ fontSize: "3.5rem" }}>
              {" "}
              "Una Mirada Fresca al Servicio"
            </h1>
            <p>Nuestra Filosofía</p>
          </Stitlecontainer>
          <Swiper
            id="about"
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              1000: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiperAbout"
          >
            <SwiperSlide className="mySwiperAboutSlide">
              <NumberContainer>1</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Calidad</TitleSlide>
                <TextSlide>
                  Se refleja en nuestro trabajo, nuestras ideas y nuestros
                  resultados.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperAboutSlide">
              <NumberContainer>2</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Confianza</TitleSlide>
                <TextSlide>
                  Es un pilar fundamental de nuestro negocio.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperAboutSlide">
              <NumberContainer>3</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Comunicación Continua</TitleSlide>
                <TextSlide>
                  Creemos en proporcionar soporte proactivo.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperAboutSlide">
              <NumberContainer>4</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Desarrollo Profesional y Conocimiento</TitleSlide>
                <TextSlide>
                  Un equipo de profesionales de primer nivel.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
          </Swiper>
        </SubcontainerSwp>
      </Fade>
    </Container>
  );
}
const Container = styled.div`

  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    height: 100vh;
  }
`;
const SubcontainerSwp = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  gap: 2rem;
  overflow: hidden;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;
const Stitlecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;
const NumberContainer = styled.div`
  font-size: 5rem;
  padding-left: 0.5rem;
  font-weight: 900;
`;
const TextSlideCont = styled.div`
`;
const TitleSlide = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
`;
const TextSlide = styled.p`
  font-size: 1rem;
`;
const Fade = styled.div`
 padding: 5rem 0 5rem 0;
height: 100%;
  width: 100%;
  background-color: #0000009c;
  z-index: 1;
  @media (max-width: 560px) {
    height: 100vh;
  }
`;
