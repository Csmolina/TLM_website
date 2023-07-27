import styled from "styled-components";
import ContactImage from "../../assets/contact.jpg";
import ContactImageMobile from "../../assets/contactmobile.jpg";
import { useHref } from "react-router-dom";
export function Contact_first() {
  return (
    <Container>
      <Fade>
        {" "}
        <SecondContainer className="container col-xxl-8  px-4 py-5">
          <div
            className="row flex-lg-row  align-items-center g-5 py-5"
          >
            <div className="col-lg-6   align-items-center">
              <h1 className="display-5  text-body-emphasis lh-1 mb-3">
                Contáctenos
              </h1>
              <p className="lead" >
                Póngase en contacto con nosotros para obtener una cotización o
                más información, y vea lo fácil que es comenzar a disfrutar de
                todos los beneficios que TLM Royal puede ofrecer a su empresa.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  className=""
                  href="https://wa.me/593998103989"
                  target="_blank"
                >
                  {" "}
                  <WpBtn
                    type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2"
                    action="https://google.com"
                  >
                    Whatsapp{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </WpBtn>
                </a>
                <a href="mailto:info@tlmroyal.com">
                  <MailBtn type="button" class="">
                    Correo{"   "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </MailBtn>
                </a>
              </div>
            </div>
          </div>
        </SecondContainer>
      </Fade>
    </Container>
  );
}
const WpBtn = styled.button`
@media (max-width: 560px) {
   width: 100%;

  }
  background-color: #25d366;
  color: white;
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
    background-color: #1c9448 !important;
  }
  &::after {
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
const MailBtn = styled.button`
@media (max-width: 560px) {
   width: 100%;

  }
  color: white;
  background-color: #2825d3;
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
    background-color: #1c3e94 !important;
  }
  &::after {
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
const Container = styled.div`
  background-image: url(${ContactImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 560px) {
    background-image: url(${ContactImageMobile});

  }
`;
const SecondContainer = styled.div`
  color: #c5c5c5;
  .text-body-emphasis {
    color: white !important;
    font-size: 3.5rem;
  }
  @media (max-width: 560px) {
    h1{
      font-size: 2rem !important;
    }
    p{
      font-size: 1rem;
    }

  }
`;
const Fade = styled.div`
padding: 5rem 0 5rem 0;
  background-color: #00000087;
  z-index: 1;
  @media (max-width: 560px) {
   padding: 0;

  }
`;
