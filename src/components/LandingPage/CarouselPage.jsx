import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Contabilidad from "../../assets/business-woman.jpg";
import Auditoria from "../../assets/audit.jpg";
import Impuestos from "../../assets/tax.jpg";
import Consultoria from "../../assets/consulting.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CarouselPage.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { styled } from "styled-components";

export function CarouselPage() {
  return (
    <div id="general">
      <div className="container col-xxl-8 px-4 py-5">
        <Container>
          <Title>Servicios</Title>
          <Paragraph>
          Excelencia en auditoría y contabilidad: tu socio de confianza para el éxito financiero de tu negocio. Servicios profesionales ajustados a tus necesidades.
          </Paragraph>
        </Container>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          style={{
            "--swiper-navigation-color": "#a7a7a7",
            "--swiper-pagination-color": "#310356",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
         
          breakpoints={{
           
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <Card>
              <img src={Auditoria} alt="" />
              <TextContainer>
                <SubTitle>Auditoría</SubTitle>
                <Text>
                Transparencia y confiabilidad: nuestros servicios de auditoría para garantizar la integridad y cumplimiento de tu empresa.
                </Text>
              </TextContainer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card>
              <img src={Contabilidad} alt="" />
              <TextContainer>
                <SubTitle>Contabilidad</SubTitle>
                <Text>
                Gestión financiera integral: nuestros servicios de contabilidad para optimizar tus recursos y potenciar el crecimiento de tu negocio.
                </Text>
              </TextContainer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card>
              <img src={Impuestos} alt="" />
              <TextContainer>
                <SubTitle>Impuestos</SubTitle>
                <Text>
                Optimización fiscal: nuestros servicios de impuestos para ahorrar y cumplir con tus obligaciones tributarias.
                </Text>
              </TextContainer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card>
              <img src={Consultoria} alt="" />
              <TextContainer>
                <SubTitle>Consultoría</SubTitle>
                <Text>
                Ideas estratégicas: nuestros servicios de consultoría para impulsar tu negocio y alcanzar el éxito empresarial.
                </Text>
              </TextContainer>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto ;
  
    gap: 1rem;
  }
`;
const TextContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
`;
const Title = styled.h1`
  text-align: start;
  font-size: 3rem;
  @media (max-width:64em) {
    font-size: 2rem;
  }
  @media (min-width:570px) {
    hr{
      display: none;
    }
  }
`;
const SubTitle = styled.h1`
  text-align: start;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  @media (max-width:560px) {
    font-size: 1.7rem;
  }
  
`;
const Paragraph = styled.p`
  text-align: start;
  @media (max-width:560px) {
    font-size: 1rem;
  }
`;
const Text = styled.p`
  text-align: start;
`;
const Card = styled.div`
  width: 100%;

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    object-fit: cover;
    box-shadow: -2px 5px 6px -5px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: -2px 5px 6px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: -2px 5px 6px -5px rgba(0, 0, 0, 0.6);

    image-rendering: optimizeSpeed;
    image-resolution: 300dpi;
  }
`;
