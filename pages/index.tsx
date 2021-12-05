import HeaderButtons from "./HeaderButtons";
import MainContent from "./MainContent";
import InfoBar from "./InfoBar";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="container">
      <Image
        alt="Psychadelic colours"
        src="/BackgroundMain.png"
        layout="fill"
        priority={true}
        quality={100}
      />
        <div className="buttons">
          <HeaderButtons />
        </div>
        <div className="mainContent">
          <MainContent />
        </div>
        <div className="infoBar">
          <InfoBar />
        </div>
      </div>
    </div>
  );
}
