import styled from "styled-components";

interface AboutTextProps {
  text: string;
}

const AboutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  color: white;
  background-color: #ec9c95;
  font-size: 2.5vw;
`;

export default function AboutText({ text }: AboutTextProps) {
  return (
    <>
      <AboutTextContainer>{text.toUpperCase()}</AboutTextContainer>
    </>
  );
}
