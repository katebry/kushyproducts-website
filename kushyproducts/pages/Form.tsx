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
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Input = styled.input`
  grid-area: 1 / 2 / 2 / 3;
  background-color: white;
  border: none;
  border-radius: 0px;
  color: black;
  min-height: 8vh;
  font-size: 4vh;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

const EmailInput = styled(Input)`
  grid-area: 1 / 3 / 2 / 4;
`;

const TextInput = styled(Input)`
  grid-area: 2 / 2 / 4 / 4;
  min-height: 20vh;
  padding-bottom: 20px;
`;

const BottomSection = styled.div`
  grid-area: 4 / 1 / 5 / 5;
  background-color: #e8461c;
  min-height: 8vh;
`;

const FormWrapper = styled.div`
  margin-bottom: 30px;
`;

export default function Form() {
  return (
    <FormWrapper>
      <FormContainer id="contact">
        <Title>GET IN TOUCH</Title>
        <FormGrid>
          <Input />
          <EmailInput />
          <TextInput />
          <BottomSection />
        </FormGrid>
      </FormContainer>
    </FormWrapper>
  );
}
