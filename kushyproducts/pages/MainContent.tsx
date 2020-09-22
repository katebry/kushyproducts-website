import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 3 / 2 / 4 / 8;
`;

const ContactWrapper = styled.div`
  grid-area: 4 / 2 / 5 / 8;
`;

interface MainContentProps {
  content: string;
  email?: string;
  socials?: string;
}

export default function MainContent({
  content,
  email,
  socials,
}: MainContentProps) {
  return (
    <>
      <ContentWrapper>{content}</ContentWrapper>
      <ContactWrapper>
        {email ? <div>{email}</div> : null}
        {socials ? <div>{socials}</div> : null}
      </ContactWrapper>
    </>
  );
}
