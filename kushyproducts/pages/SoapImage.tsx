import styled from "styled-components";

interface SoapImageProps {
  children?: React.ReactNode;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default function SoapImage(props: SoapImageProps) {
  return (
    <ImageContainer>
      <StyledImage src="/Soap.png" />
    </ImageContainer>
  );
}
