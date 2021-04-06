import styled from "styled-components";

interface InfoBarProps {
  text: string;
}

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 42px;
`;

export default function InfoBar({ text }: InfoBarProps) {
  return (
    <>
      <TextWrapper>{text.toUpperCase()}</TextWrapper>
    </>
  );
}
