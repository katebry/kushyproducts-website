import styled from "styled-components";

const Button = styled.a`
  height: 80%;
  color: white;
  font-size: 4vw;
  margin-right: 3vw;
  cursor: pointer;
`;

export default function HomeButton() {
  return (
    <>
      <Button href="#home">Home</Button>
    </>
  );
}
