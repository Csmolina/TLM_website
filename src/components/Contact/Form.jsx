import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Phone from "../../assets/phone.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Form() {
  const form = useRef();
  const notify = () =>
    toast.success(
      <div>
        Gracias por contactarnos. <br /> Pronto nos comunicaremos contigo.
      </div>,
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  const notifyerror = () =>
    toast.error(<div>Error. No se pudo enviar el mensaje.</div>, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          notify();
        },
        (error) => {
          notifyerror();
        }
      );
  };
  return (
    <Container>
      <Fade>
        <SubContainer className="container">
          <h1 style={{ fontWeight: "700" }}>Ponerse en Contacto</h1>
          <p style={{ color: "#cecdcd" }}>
            Déjanos un mensaje ante cualquier duda.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <FormContainer>
              <FirstTwoContainer>
                {" "}
                <NameContainer>
                  <InputForms
                    type="text"
                    name="user_name"
                    placeholder="Nombre"
                    required
                  />
                </NameContainer>
                <MailContainer>
                  <InputForms
                    type="email"
                    name="user_email"
                    placeholder="Correo Electrónico"
                    required
                  />
                </MailContainer>
              </FirstTwoContainer>

              <TextContainer>
                <AreaText name="message" placeholder="Mensaje" required />
                <BtnSend type="submit" value="Enviar" />
              </TextContainer>
            </FormContainer>
          </form>
        </SubContainer>
      </Fade>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${Phone});
  background-repeat: no-repeat;
  background-size: cover;
`;
const SubContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  color: white;
  @media (max-width: 560px) {
    padding-top:5rem;
    padding-bottom: 5rem;
   h1{
    font-size: 2rem;
   }
   p{
    font-size: 1rem;
   }
  }
`;
const InputForms = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  padding: 1.5rem;
  height: 4vh;
  @media (max-width: 560px) {
   font-size: 1rem;

  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;
const BtnSend = styled.input`
  background-color: #33004b;
  color: white;
  outline: none;
  margin-top: 2rem;
  font-size: 1.5rem;
  border: none;
  padding: 0.9rem 2.3rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    transform: scale(0.9);
    background-color: #660d8f !important;
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
  @media (max-width: 560px) {
   font-size: 1rem;

  }
`;
const AreaText = styled.textarea`
  border: 0;
  height: 15vh;
  border-radius: 5px;
  font-size: 1.3rem;
  padding: 1.5rem;
`;
const FirstTwoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
const Fade = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000087;
  z-index: 1;
`;
