import styled from "styled-components";

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e8461c;
`;

const Title = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  font-size: 10vh;
`;

export default function Form() {
  return (
    <FormContainer>
      <Title>GET IN TOUCH</Title>
      <p>hello</p>
    </FormContainer>
  );
}
