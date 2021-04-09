import styled from "styled-components";

const Button = styled.a`
  height: 80%;
  color: white;
  font-size: 4vw;
  cursor: pointer;
`;

export default function ContactButton() {
  return (
    <>
      <Button href="#contact">Contact</Button>
    </>
  );
}
