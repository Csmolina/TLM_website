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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis pellentesque metus id lacinia. Nunc dapibus pulvinar
            auctor. Duis nec sem at orci commodo viverra id
          </Paragraph>
        </Container>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
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
          navigation={true}
          breakpoints={{
            440: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  convallis pellentesque metus id lacinia.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  convallis pellentesque metus id lacinia.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  convallis pellentesque metus id lacinia.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  convallis pellentesque metus id lacinia.
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
    grid-template-rows: 1fr 1fr;
  }
`;
const TextContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Title = styled.h1`
  text-align: start;
  font-size: 3.5rem;
`;
const SubTitle = styled.h1`
  text-align: start;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
const Paragraph = styled.p`
  text-align: start;
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
