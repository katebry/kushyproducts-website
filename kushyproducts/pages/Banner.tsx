import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Image = styled.img`
  height: 300px;
  width: 35%;
`;

export default function Banner() {
  return (
    <>
      <ImageContainer>
        <Image src="/logo.jpeg" />
      </ImageContainer>
    </>
  );
}
