import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import AnimationWhy from "../../assets/Animation - 1689116219780.json";
import { Pagination, Navigation } from "swiper/modules";
import "./Chooseus.css";
export function Chooseus() {
  return (
    <div className="outer">
      <Container className="container ">
        <ContainerTexto>
          <Titulo>¿Por qué elegirnos?</Titulo>
          <Carousel id="chooseus">
            {" "}
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{
                "--swiper-navigation-color": "#e6e6e6",
                "--swiper-pagination-color": "#e6e6e6",
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
  padding-left: 3rem;
  font-size: 3.5rem;
  margin-bottom: 8rem;
  @media (max-width: 370px) {
    padding: 0;
    margin-bottom: 0;
    text-align: center;
  }
`;
const Carousel = styled.div`
  width: 35vw;

  margin: 0;
  @media (max-width: 560px) {
    width: 85vw;
  }
`;
const ContainerImages = styled.div`
  @media (max-width: 560px) {
    padding: 0;
  }
  padding: 5rem;
`;
