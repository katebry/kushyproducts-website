import styled from "styled-components";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
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
