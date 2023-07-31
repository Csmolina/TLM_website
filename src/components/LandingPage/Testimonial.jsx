import styled from "styled-components";
import Avatar from "../../assets/avatar.png";
export function Testimonial() {
  return (
    <Container>
      <section>
        <InnerContainer className='container col-xxl-8 px-4 py-5" '>
          <div class="container py-5">
            <div class="row d-flex justify-content-center">
              <div>
                <h1 class="titulo" style={{ fontSize: "3em" }}>
                 ¿Qué dicen nuestro clientes? 
                </h1>
              </div>
            </div>

            <div class="row text-center">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="card" style={{ borderRadius: ".7rem" }}>
                  <div class="card-body py-4 mt-2">
                    <div class="d-flex justify-content-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="#33004B"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </div>
                    <h5 class="font-weight-bold">Mishell Ocaña</h5>
                    <h6 class="font-weight-bold my-3">Contadora General</h6>
                    <h6 class="font-weight-bold my-3">
                      Medgen Laboratorios Clínicos Cía. Ltda.
                    </h6>

                    <p class="mb-2 text" >
                      “Nos sentimos muy
                      satisfechos con los servicios de auditoría brindados por
                      TLM ROYAL, ya que ha sido un ahorro significativo de
                      tiempo por su método de trabajo. Adicionalmente, son muy
                      puntuales con entrega de informes, sus capacitaciones son
                      muy útiles y están siempre prestos a ayudar con cualquier
                      inquietud de forma rápida y oportuna”.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="card" style={{ borderRadius: ".7rem" }}>
                  <div class="card-body py-4 mt-2">
                    <div class="d-flex justify-content-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="#33004B"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </div>
                    <h5 class="font-weight-bold"> Steve Cueva</h5>
                    <h6 class="font-weight-bold my-3">
                      Gerente Administrativo
                    </h6>
                    <h6 class="font-weight-bold my-3">Artrosport</h6>

                    <p class="text">
                     Hemos trabajado con
                      TLM desde el año 2021, en donde siempre hemos recibido lo
                      que buscamos, claridad, cumplimiento y efectividad en
                      nuestras obligaciones tributarias y de gestión
                      regulatoria.
                      <br />
                      Información y declaraciones al día, sumados a la constante
                      capacitación, han de hecho de TLM un aliado estratégico en
                      nuestras decisiones financieras.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-0">
                <div class="card" style={{ borderRadius: ".7rem" }}>
                  <div class="card-body py-4 mt-2">
                    <div class="d-flex justify-content-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="#33004B"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </div>
                    <h5 class="font-weight-bold">Timothy Abraham</h5>
                    <h6 class="font-weight-bold my-3">European Sales</h6>
                    <h6 class="font-weight-bold my-3">Executive</h6>
                    <p class=" text">
                      I would like to give
                      a shout out to John Tindall and Irene of TLM Royal
                      Business Services. We have a small business and were on
                      the lookout to change accountants and interviewed four.{" "}
                      <br /> From being on time to the ‘interview’ (yes, we
                      decided we wanted to interview to see who was the most
                      efficient and professional) to the price to the follow-up
                      … we were totally blown away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InnerContainer>
      </section>
    </Container>
  );
}
const Container = styled.div`
  background-color: #e7e7e7;
`;
const InnerContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  .text{
    text-align: start;
    padding-left: 1rem;
  }
  .titulo{
    text-align: start;
    margin-bottom: 3rem;
    @media (max-width:64em) {
      font-size: 2rem !important;
     
    }
  }
`;
