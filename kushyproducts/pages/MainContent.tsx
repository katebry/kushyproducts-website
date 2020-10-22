import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 3 / 2 / 4 / 8;
`;

const ContactWrapper = styled.div`
  grid-area: 4 / 2 / 5 / 8;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5px;
`;

interface MainContentProps {
  content1: string;
  content2: string;
  email?: string;
  socials?: string;
}

export default function MainContent({
  content1,
  content2,
  email,
  socials,
}: MainContentProps) {
  return (
    <>
      <ContentWrapper>
        <TextBox>
        {content1}
        </TextBox>
        <TextBox>
          {content2}
        </TextBox>
        </ContentWrapper>
      <ContactWrapper>
      <TextBox>
        {email ? <div>{email}</div> : null}
      </TextBox>
      <TextBox>
        {socials ? <div>{socials}</div> : null}
      </TextBox>
      </ContactWrapper>
    </>
  );
}
