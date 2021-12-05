import styled from "styled-components";
import { SiInstagram, SiGooglemaps } from "react-icons/si";

const Button = styled.a`
  height: 80%;
  color: white;
  font-size: 4vw;
  margin-right: 3vw;
  cursor: pointer;
  padding-top: 2px;
`;

const StyledButton = styled(Button)`
  margin-left: 3vw;
  height: 70%;
  padding-top: 0px;
`;

export default function HeaderButtons() {
  return (
    <>
      <StyledButton target="_blank" href='https://www.instagram.com/kushy_products/'>
        <SiInstagram />
      </StyledButton>
      <StyledButton target="_blank" href="https://www.google.com/maps/place/Birkenhead+Market/@53.3903961,-3.0235807,15z/data=!4m2!3m1!1s0x0:0x5036668d90df0411?sa=X&ved=2ahUKEwiOhOz638z0AhWJa8AKHbIqDO4Q_BJ6BAhhEAU">
        <SiGooglemaps />
      </StyledButton>
    </>
  );
}
