import CVEditor from "../cv-editor/cv-editor.component";
import CVView from "../cv-view/cv-view.component";
import Navbar from "../navbar/navbar.component";
import "./home.styles.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Navbar />
      </div>
      <div className="home__content">
        <div className="home__cv-editor">
          <CVEditor />
        </div>
        <div className="home__cv-view">
          <CVView />
        </div>
      </div>
    </div>
  );
}

export default Home;
