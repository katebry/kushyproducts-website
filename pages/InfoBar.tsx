import styled from "styled-components";

interface InfoBarProps {
  text?: string;
}

const TextWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 5vw;
`;

export default function InfoBar({ text }: InfoBarProps) {
  return (
    <>
      <TextWrapper>FIND US AT BIRKENHEAD MARKET</TextWrapper>
    </>
  );
}
