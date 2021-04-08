import styled from "styled-components";

interface InfoBarProps {
  text: string;
}

const TextContainer = styled.div`
  padding-top: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 5vw;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default function InfoBar({ text }: InfoBarProps) {
  return (
    <TextContainer>
      <TextWrapper>{text.toUpperCase()}</TextWrapper>
    </TextContainer>
  );
}
