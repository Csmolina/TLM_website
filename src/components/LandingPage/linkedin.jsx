import { styled } from "styled-components";

export function Linkedin() {
  return (
    <Container className="container">
      <iframe
        src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/162893"
        frameborder="0"
        width="100%"
        height="1000"
      ></iframe>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
