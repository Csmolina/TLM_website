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
              El servicio de contabilidad empresarial abarca el registro, análisis y reporte de las transacciones financieras de la empresa. Incluye la preparación de estados financieros como el balance general, el estado de resultados y el estado de flujo de efectivo. <br />También se encarga de elaborar y presentar declaraciones de impuestos, gestionar nóminas, brindar asesoramiento financiero y fiscal, y asegurar el cumplimiento de normativas contables y regulatorias. Una contabilidad organizada y profesional es crucial para una gestión eficiente, maximizar la rentabilidad y el crecimiento de la empresa.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>2</SlideNumber>
              <SlideTitle>Declaraciones Y Presentación De Impuestos</SlideTitle>
              <SlideText>
              La declaración y presentación de impuestos es un proceso obligatorio para las empresas y personas que deben cumplir con sus responsabilidades fiscales ante las autoridades tributarias. Además de cumplir con las obligaciones fiscales, la presentación de impuestos también puede presentar oportunidades para aprovechar deducciones y créditos fiscales legítimos, lo que puede reducir la carga tributaria de la empresa. <br />Un enfoque preciso y profesional en la declaración y presentación de impuestos es crucial para evitar problemas con las autoridades fiscales y mantener una posición financiera sólida para la empresa.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
         
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              <SlideNumber>3</SlideNumber>
              <SlideTitle>Control Financiero</SlideTitle>
              <SlideText>
              Un Controller Financiero es un profesional clave en la gestión financiera de una empresa. Su función principal es supervisar y dirigir la planificación, análisis y control de las actividades financieras y contables de la organización. <br />Se encarga de la elaboración y análisis de informes financieros, presupuestos y proyecciones, proporcionando una visión clara y precisa del rendimiento económico y financiero de la empresa. Además, el Controller Financiero juega un papel crucial en la toma de decisiones estratégicas, asegurando el cumplimiento de regulaciones fiscales y contables, y garantizando la eficiencia y eficacia de los procesos financieros en la organización.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              {" "}
              <SlideNumber>4</SlideNumber>
              <SlideTitle>Nómina De Sueldos</SlideTitle>
              <SlideText>
              Es un registro detallado de los salarios, bonificaciones, deducciones, beneficios y otras compensaciones que se otorgan a los empleados. El proceso de nómina implica calcular los ingresos netos de cada empleado, teniendo en cuenta las deducciones por impuestos, seguros, contribuciones y otros conceptos. <br />Además, la nómina también puede incluir información sobre horas trabajadas, días de vacaciones, días de enfermedad y otros aspectos relacionados con la asistencia y la ausencia del personal.
              </SlideText>
            </InnerSliderContainer>
          </SwiperSlide>
          <SwiperSlide className="mySwiperAccountingSlide">
            <InnerSliderContainer>
              {" "}
              <SlideNumber>5</SlideNumber>
              <SlideTitle>
                Presupuestos, Previsiones De Flujo De Caja Y Planificación
                Financiera
              </SlideTitle>
              <SlideText>
              Los presupuestos, previsiones de flujo de caja y planificación financiera son herramientas vitales para una gestión financiera exitosa. Proporcionan una visión clara del desempeño financiero, permiten la toma de decisiones informadas y ayudan a mantener la estabilidad y crecimiento de la empresa. <br />Incluye la identificación de oportunidades de inversión, el manejo de riesgos financieros, la optimización del uso de recursos y la evaluación del rendimiento financiero.
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
  @media (max-width: 560px) {
  padding :5rem 0 5rem 0;
 }
`;
const TextContainer = styled.div`
  display: flex;
  justify-items: space-between;
  gap: 3rem;
  margin-bottom: 5rem;
  @media (max-width: 560px) {
    flex-direction: column;
    
   h1 {
 font-size: 2rem;
}
p {
 font-size: 1rem;
}
 }
`;
const SliderContainer = styled.div``;
const Title = styled.h1`
  @media (max-width: 560px) {
    margin-bottom: 0rem;
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
  @media (max-width: 560px) {
 font-size: 2rem;
 }
 
`;
const SlideNumber = styled.h1`
  font-size: 10rem;


  color: #f4f4f4;
`;
const SlideText = styled.p`
  color: #d1cfcf;
  padding: 0;
  font-size: 1rem;
`;
const InnerSliderContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  padding-bottom: 2rem;
  grid-template-rows: 10rem 15rem auto;
  gap: 3rem;
  @media (max-width: 560px) {
    grid-template-rows: auto auto auto;
gap: 1rem;
}
`;
