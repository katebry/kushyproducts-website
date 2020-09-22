import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-area: 2 / 3 / 3 / 7;
  max-height: 300px;
  padding-bottom: 30px;
`;

const Image = styled.img`
  @media only screen and (max-width: 426px) {
    width: 195px;
  }
  @media only screen and (min-width: 427px) {
    width: 300px;
  }
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
