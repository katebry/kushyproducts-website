import styled from "styled-components";

interface AboutTextProps {
  text: string;
}

const AboutTextContainer = styled.div`
  text-align: center;
  color: white;
  font-size: 2.8vw;
`;

const StyledSpan = styled.span`
  padding: 10px;
  display: inline-flex;
  background-color: #ec9c95;
`;

export default function AboutText({ text }: AboutTextProps) {
  return (
    <>
      <AboutTextContainer>
        <StyledSpan>{text.toUpperCase()}</StyledSpan>
      </AboutTextContainer>
    </>
  );
}
