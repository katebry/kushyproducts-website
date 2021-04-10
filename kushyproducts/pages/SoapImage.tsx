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
  max-height: 45vh;
`;

export default function SoapImage(props: SoapImageProps) {
  return (
    <ImageContainer>
      <StyledImage src="/Soap.png" />
    </ImageContainer>
  );
}
