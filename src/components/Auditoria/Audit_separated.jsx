import styled from "styled-components";
export function Audit_separated({
  title,
  firsttext,
  secondtext,
  background,
  color,
  colortitle,
  hrcolor,
}) {
  return (
    <Container style={{ backgroundColor: background, color: color }}>
      <SubContainer className="container">
        <Title style={{ color: colortitle }}>{title}</Title>
        <Division style={{ borderColor: hrcolor }} />
        <TextContainer style={{ color: color }}>
          <FirstText>{firsttext}</FirstText>
          <SecondText>{secondtext}</SecondText>
        </TextContainer>
      </SubContainer>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1% auto;
  padding-top: 1rem;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
`;
const Title = styled.h1`
  padding: 10rem 0 10rem 0;
  display: flex;
  align-items: center;
  font-weight: 600;

  @media (max-width: 560px) {
    padding: 3rem 0 0 0;
  }
`;
const TextContainer = styled.div`
  padding: 10rem 3rem 5rem;
  @media (max-width: 560px) {
    padding: 0 0 0 0;
    justify-content: center;
  }
`;
const FirstText = styled.p`
  margin-bottom: 3rem;
`;
const SecondText = styled.p``;
const Division = styled.hr`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: 0.3rem solid #f5982d;
  height: 100%;
  width: 1px;
  @media (max-width: 560px) {
    height: 1px;
    width: 100%;
    border-top: 0.3rem solid #f5982d;
  }
`;
