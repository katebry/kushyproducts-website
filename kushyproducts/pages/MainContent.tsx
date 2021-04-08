import Image from 'next/image'

interface MainContentProps {
    children?: React.ReactNode
}

export default function MainContent(props: MainContentProps) {
    return (
        <>
            <Image src="/Logo.png" alt="kusky products logo" layout='fill' objectFit="contain"/>
        </>
    )
}
