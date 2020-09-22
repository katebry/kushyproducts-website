import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-area: 2 / 3 / 4 / 7;
  max-height: 300px;
`;

const Image = styled.img`
  width: 100px;
`;

export default function Banner() {
  return (
    <>
      <ImageContainer>
        <Image src="/logo.png" alt="kushy products logo" />
      </ImageContainer>
    </>
  );
}
