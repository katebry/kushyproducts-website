import styled from "styled-components";

interface InfoBarProps {
  text: string;
}

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  height: 100%;
  color: white;
  font-size: 5vw;
`;

export default function InfoBar({ text }: InfoBarProps) {
  return (
    <TextContainer>
      <TextWrapper>{text.toUpperCase()}</TextWrapper>
    </TextContainer>
  );
}
