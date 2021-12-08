import Image from "next/image"

interface MainContentProps {
  children?: React.ReactNode;
}

export default function MainContent(props: MainContentProps) {
  return (
    <div className="imageContainer">
      <Image
        layout="fill"
        objectFit="contain"
        alt="kushy products logo"
        src="/Logo.png"
      />
    </div>
  );
}
