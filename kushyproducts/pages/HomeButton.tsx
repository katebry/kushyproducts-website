import styled from "styled-components";
import { SiInstagram } from "react-icons/si";

const Button = styled.a`
  height: 80%;
  color: white;
  font-size: 4vw;
  margin-right: 3vw;
  cursor: pointer;
  padding-top: 2px;
`;

const InstagramButton = styled(Button)`
  margin-left: 3vw;
  height: 70%;
  padding-top: 0px;
`;

export default function HomeButton() {
  return (
    <>
      <InstagramButton href='https://www.instagram.com/kushy_products/'>
        <SiInstagram />
      </InstagramButton>
      <Button href="#home">Home</Button>
    </>
  );
}
