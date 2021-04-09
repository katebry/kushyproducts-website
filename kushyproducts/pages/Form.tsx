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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 3fr) 1fr;
  grid-template-rows: 4fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
      <FormGrid>
        <Input />
      </FormGrid>
    </FormContainer>
  );
}
