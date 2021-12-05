interface MainContentProps {
  children?: React.ReactNode;
}

export default function MainContent(props: MainContentProps) {
  return (
    <div className="imageContainer">
      <img className="styledImage" src="/Logo.png" alt="kushy products logo" />
    </div>
  );
}
