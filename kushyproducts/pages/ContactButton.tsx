import styled from 'styled-components'

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  color: white;
  font-size: 4vw;
`

export default function ContactButton() {
    return (
        <>
            <Button>Contact</Button>
        </>
    )
}
