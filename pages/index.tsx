import HeaderButtons from "./HeaderButtons";
import MainContent from "./MainContent";
import InfoBar from "./InfoBar";

export default function Home() {
  return (
    <div>
      <div className="container">
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
