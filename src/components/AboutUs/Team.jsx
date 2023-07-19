import styled from "styled-components";
import Avatar from "../../assets/avatarfemale.png";
import Lkd from "../../assets/linkedin_blue.svg";
export function Team() {
  return (
    <Container>
      <SecondContainer className="container col-xxl-8 px-4 py-5">
        <h1 style={{ fontSize: "3.5rem", marginTop: "5rem" }}>
          Nuestro Equipo
        </h1>
        <CardContainerEmp>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
          <EmployeeCard>
            <EmployeeImg src={Avatar}></EmployeeImg>
            <EmployeeDesc>
              <EmployeeTitle>Daniel Ryan</EmployeeTitle>
              <EmployeeRole>UI/UX Designer</EmployeeRole>
              <EmployeeInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis
              </EmployeeInfo>
              <Linkedin></Linkedin>
            </EmployeeDesc>
          </EmployeeCard>
        </CardContainerEmp>
      </SecondContainer>
    </Container>
  );
}
const Container = styled.div`
  background-color: #1f1f1f;

  color: white;
  padding-bottom: 5rem;
`;
const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const EmployeeCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 560px) {
    grid-template-columns: auto;
    border-bottom: 0.1rem solid #e2e1e211;
    gap: 2rem;
  }
  gap: 1rem;
`;
const CardContainerEmp = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 560px) {
    grid-template-columns: auto;
  }
  gap: 6rem;
`;
const EmployeeImg = styled.img`
  width: 8vw;
  border-radius: 5px;
  @media (max-width: 560px) {
    width: 40vw;
  }
`;
const EmployeeDesc = styled.div``;
const EmployeeTitle = styled.h4``;
const EmployeeRole = styled.h6`
  color: #c9c8c8;
`;
const EmployeeInfo = styled.h6`
  color: #cbcbcb;
`;
const Linkedin = styled.button`
  width: 1.2vw;
  height: 1.2vw;
  background-image: url(${Lkd});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  @media (max-width: 560px) {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    width: 30px;
    height: 30px;
    background-size: cover;
  }
`;
