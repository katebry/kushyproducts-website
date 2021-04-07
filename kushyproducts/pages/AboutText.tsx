import styled from "styled-components";

const AboutTextContainer = styled.div`
  color: white;
  font-size: 3vw;
  padding: 6px;
  display: inline-flex;
  background-color: #ec9c95;
`;

export default function AboutText() {
  return (
    <>
      <AboutTextContainer>We make glorious bath bombs, soaps and more</AboutTextContainer>
      <AboutTextContainer>so you can relax, unwind and soak up some</AboutTextContainer>
      <AboutTextContainer>all natural botanical bliss!</AboutTextContainer>
    </>
  );
}
