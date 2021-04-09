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

const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: 0px;
  color: black;

  &:focus {
    outline: none;
  }
`;

export default function Form() {
  return (
    <FormContainer>
      <Title>GET IN TOUCH</Title>
      <Input />
    </FormContainer>
  );
}
