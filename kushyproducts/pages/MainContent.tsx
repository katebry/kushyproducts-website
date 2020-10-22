import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Banner from './Banner'

interface MainContentProps {
    content: TextContent
}

interface TextContent {
    1: {
        key: string
        line1: string
        line2: string
        line3: string
    }
    2: {
        key: string
        line1: string
        line2: string
        email: string
        socials: string
    }
    3: {
        key: string
        line1: string
        socials: string
    }
}

const ContentWrapper = styled.div`
    grid-area: 3 / 2 / 4 / 8;
`

const ContactWrapper = styled.div`
    grid-area: 4 / 2 / 5 / 8;
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 15px;
`

const AboutTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 5px;
`

export default function MainContent({ content }: MainContentProps) {
    const [text, setText] = useState<any>({})
    const [id, setId] = useState(1)
    const [loading, setLoading] = useState(true)

    const about = content[1]
    const contact = content[2]
    const events = content[3]

    useEffect(() => {
        if (loading) {
            if (id === 1) {
                setText(about)
            }
            if (id === 2) {
                setText(contact)
            }
            if (id === 3) {
                setText(events)
            } else {
                setLoading(false)
            }
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        contentSetter()
    }, [id])

    const handleClick = (buttonId) => {
        setId(buttonId)
    }

    const contentSetter = () => {
        if (id === 1) {
            setText(about)
        }
        if (id === 2) {
            setText(contact)
        }
        if (id === 3) {
            setText(events)
        }
        return
    }

    return (
        <>
            {loading ? (
                <>
                    {' '}
                    <div>loading...</div>
                </>
            ) : (
                <>
                    <Header handleClick={handleClick} />
                    <Banner />
                    {text.key === 'about' ? (
                        <ContentWrapper>
                            <TextBox>{text.line1}</TextBox>
                            <TextBox>{text.line2}</TextBox>
                            <TextBox>{text.line3}</TextBox>
                        </ContentWrapper>
                    ) : null}
                    {text.key === 'contact' ? (
                        <ContentWrapper>
                            <AboutTextBox>{text.line1}</AboutTextBox>
                            <AboutTextBox>{text.line2}</AboutTextBox>
                        </ContentWrapper>
                    ) : null}
                    {text.key === 'events' ? (
                        <ContentWrapper>
                            <TextBox>{text.line1}</TextBox>
                        </ContentWrapper>
                    ) : null}
                    <ContactWrapper>
                        <TextBox>
                            {text.email ? <div>{text.email}</div> : null}
                        </TextBox>
                        <TextBox>
                            {text.socials ? <div>{text.socials}</div> : null}
                        </TextBox>
                    </ContactWrapper>
                </>
            )}
        </>
    )
}
