import styled from "styled-components";

interface MainContentProps {
  children?: React.ReactNode;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default function MainContent(props: MainContentProps) {
  return (
    <ImageContainer>
      <StyledImage src="/Logo.png" alt="kushy products logo" />
    </ImageContainer>
  );
}
