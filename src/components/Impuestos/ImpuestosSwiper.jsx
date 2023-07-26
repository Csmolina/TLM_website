import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "./ImpuestosSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export function ImpuestosSwiper() {
  return (
    <Container>
    
        <SubcontainerSwp className="container col-xxl-8 px-4 py-5">
          <Stitlecontainer>
            <h1 style={{ fontSize: "3.5rem" }}>
              Impuestos Empresariales
            </h1>
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
            className="mySwiperTax"
          >
            <SwiperSlide className="mySwiperTaxSlide">
              <NumberContainer>1</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Informes De Cumplimiento Tributario</TitleSlide>
                <TextSlide>
                Las entidades en el Ecuador que requieran una auditoría externa deben presentar un informe de cumplimiento tributario al Servicio de Rentas Internas del Ecuador (SRI).
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperTaxSlide">
              <NumberContainer>2</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Informes De Precios De Transferencia</TitleSlide>
                <TextSlide>
                TLM Royal realiza estos informes de precios de transferencia y tiene acceso a bases de datos que brindan información financiera relevante.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperTaxSlide">
              <NumberContainer>3</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Declaraciones Y Devoluciones De Impuestos</TitleSlide>
                <TextSlide>
                El departamento de impuestos de TLM Royal brinda servicios para revisar y elaborar estas declaraciones de impuestos mensuales.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperTaxSlide">
              <NumberContainer>4</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Planificación Fiscal</TitleSlide>
                <TextSlide>
                Analizamos las estructuras corporativas, la utilización de las deducciones fiscales y la aplicación adecuada de políticas fiscales vs contables para reducir las obligaciones tributarias de las empresas.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
            <SwiperSlide className="mySwiperTaxSlide">
              <NumberContainer>5</NumberContainer>
              <TextSlideCont>
                <TitleSlide>Asesoría Fiscal</TitleSlide>
                <TextSlide>
                Las leyes y regulaciones fiscales cambian constantemente. Por ende, es necesario mantenerse informado de estos cambios para su implementación correcta y sus respectivas consideraciones.
                </TextSlide>
              </TextSlideCont>
            </SwiperSlide>
          </Swiper>
        </SubcontainerSwp>
     
    </Container>
  );
}
const Container = styled.div`

  padding-top: 5rem;
  padding-bottom: 5rem;
 background-color: #1f1f1f;
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
  font-size: 8rem;
  font-weight: 900;
`;
const TextSlideCont = styled.div``;
const TitleSlide = styled.h2`
  font-weight: 600;
`;
const TextSlide = styled.p`
  font-size: 1rem;
`;

