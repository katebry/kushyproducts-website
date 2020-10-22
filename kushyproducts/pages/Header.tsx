import styled from 'styled-components'

const ContactUsWrapper = styled.button`
    border: 0;
    background-color: white;
    padding-top: 25px;
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 22px;
    color: #e9757a;
    @media only screen and (max-width: 426px) {
        font-size: 14px;
    }
    :hover,
    :active,
    :focus {
        background: #79c098;
        border: 0;
    }
`

const AboutUsWrapper = styled.button`
    border: 0;
    background-color: white;
    padding-top: 25px;
    grid-area: 1 / 4 / 2 / 6;
    display: flex;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 22px;
    color: #e9757a;
    @media only screen and (max-width: 426px) {
        font-size: 14px;
    }
    :hover,
    :active,
    :focus {
        background: #79c098;
        border: 0;
    }
`

const EventsWrapper = styled.button`
    border: 0;
    background-color: white;
    padding-top: 25px;
    grid-area: 1 / 6 / 2 / 8;
    display: flex;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 22px;
    color: #e9757a;
    @media only screen and (max-width: 426px) {
        font-size: 14px;
    }
    :hover,
    :active,
    :focus {
        background: #79c098;
        border: 0;
    }
`

// need to set on click in here, pass it up to parent

export default function Header() {
    return (
        <>
            <AboutUsWrapper>About Us</AboutUsWrapper>
            <ContactUsWrapper>Contact Us</ContactUsWrapper>
            <EventsWrapper>Events</EventsWrapper>
        </>
    )
}
