import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import AnimationWhy from "../../assets/Animation - 1689116219780.json";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Chooseus.css";
export function Chooseus() {
  return (
    <div className="outer">
      <Container className="container ">
        <ContainerTexto>
          <Titulo className="fw-semibold ">¿Por qué elegirnos? </Titulo>
          <Carousel id="chooseus">
            {" "}
            <Swiper
              navigation={false}
              pagination={true}
              modules={[Pagination,Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-pagination-color": "#ffffff",
              }}
            >
              <SwiperSlide>
                Calidad que se refleja en nuestro trabajo, nuestras ideas y
                nuestros resultados.
              </SwiperSlide>
              <SwiperSlide>
                La confianza es un pilar fundamental de nuestro negocio.
              </SwiperSlide>
              <SwiperSlide>
                Nuestra disponibilidad ante cualquier duda acerca de nuestro
                trabajo.
              </SwiperSlide>
              <SwiperSlide>
                Contamos con personal calificado con varios años de experiencia.
              </SwiperSlide>
            </Swiper>
          </Carousel>
        </ContainerTexto>
        <ContainerImages>
          <Player autoplay loop src={AnimationWhy}>
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </ContainerImages>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  padding: 0;
`;
const ContainerTexto = styled.div`
  display: grid;
  align-content: center;
  @media (max-width: 64em) {
   width:100%;
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;

  }
`;
const Titulo = styled.h1`
  height: fit-content;
  margin: 0;

  font-size: 3rem;
  margin-bottom: 5rem;
  @media (max-width: 64em) {
    padding: 0;
    margin-bottom: 3rem;
    font-size: 2rem;

  }
`;
const Carousel = styled.div`
  width: 50vh;

  margin: 0;
  @media (max-width: 64em) {
    width: 90vw;
  }
`;
const ContainerImages = styled.div`
  @media (max-width: 64em) {
    padding: 0;
  }
  padding: 5rem;
`;
