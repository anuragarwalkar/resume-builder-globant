import { useState } from "react";
import CVEditor from "../cv-editor/cv-editor.component";
import CVView from "../cv-view/cv-view.component";
import Navbar from "../navbar/navbar.component";
import "./home.styles.scss";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="home">
      <div className="home__header">
        <Navbar />
      </div>
      <div className="home__content">
        <div className="home__cv-editor">
          <CVEditor show={show} />
        </div>
        {!show && <CVView />}
      </div>
    </div>
  );
}

export default Home;
