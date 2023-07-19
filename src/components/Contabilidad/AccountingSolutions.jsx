import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AccountingSolutions.css";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
export function AccountingSolutions() {
  return (
    <Container className="container">
      <TextContainer>
        <Title>Soluciones De Contabilidad De Calidad <hr /> </Title>
        <Text>
          Nuestro objetivo de outsourcing es brindar servicios profesionales de
          contabilidad, administrar el día a día las finanzas de su empresa y
          brindar a la gerencia información y asesoramiento relevante.
        </Text>
      </TextContainer>
      <SliderContainer>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "#fffafa",
            "--swiper-pagination-color": "#ffffff",
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination, Autoplay]}
          className="mySwiperAccounting"
        >
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              {" "}
              <SlideNumber>1</SlideNumber>
              <SlideTitle>Servicio De Contabilidad Empresarial</SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>2</SlideNumber>
              <SlideTitle>Declaraciones Y Presentación De Impuestos</SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>3</SlideNumber>
              <SlideTitle>Gestión De Cuentas</SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>4</SlideNumber>
              <SlideTitle>Control Financiero</SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>5</SlideNumber>
              <SlideTitle>
                Declaraciones Y Declaraciones Reglamentarias
              </SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              {" "}
              <SlideNumber>6</SlideNumber>
              <SlideTitle>Nómina De Sueldos</SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              {" "}
              <SlideNumber>7</SlideNumber>
              <SlideTitle>
                Presupuestos, Previsiones De Flujo De Caja Y Planificación
                Financiera
              </SlideTitle>
              <SlideText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nisl urna, ultricies eget elementum quis, tempor vel odio. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi efficitur justo eget turpis
                faucibus consectetur. Ut auctor dui sit amet elementum bibendum.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0 10rem 0;
`;
const TextContainer = styled.div`
  display: flex;
  justify-items: space-between;
  gap: 3rem;
  margin-bottom: 5rem;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
const SliderContainer = styled.div``;
const Title = styled.h1`
  @media (max-width: 560px) {
    margin-bottom: 3rem;
    padding-left: 1rem;
  }
`;
const Text = styled.p`
  width: 50%;
  @media (max-width: 560px) {
    padding-left: 1rem;
    width: 100%;
  }
`;
const SlideTitle = styled.h1`
  color: #f5982d;

  width: 100%;
`;
const SlideNumber = styled.h1`
  font-size: 10rem;
  width: 100%;

  color: #f4f4f4;
`;
const SlideText = styled.p`
  color: #d1cfcf;
  height: 100%;
  padding: 0;
  margin: 0;
`;
const InnerSliderContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 19vh 20vh 20vh;
  @media (max-width: 560px) {
    grid-template-rows: 19vh 20vh 15vh;
  }
`;
