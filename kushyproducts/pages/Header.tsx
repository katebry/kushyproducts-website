import styled from "styled-components";

const ContactUsWrapper = styled.div`
  padding-top: 25px;
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 22px;
  color: #e9757a;
`;

const AboutUsWrapper = styled.div`
  padding-top: 25px;
  grid-area: 1 / 4 / 2 / 6;
  display: flex;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 22px;
  color: #e9757a;
`;

const EventsWrapper = styled.div`
  padding-top: 25px;
  grid-area: 1 / 6 / 2 / 8;
  display: flex;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 22px;
  color: #e9757a;
`;

export default function Header() {
  return (
    <>
      <ContactUsWrapper>Contact Us</ContactUsWrapper>
      <AboutUsWrapper>About Us</AboutUsWrapper>
      <EventsWrapper>Events</EventsWrapper>
    </>
  );
}
