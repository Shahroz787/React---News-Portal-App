import React from "react";
import Side from "../../sideContent/Side/Side";
import Life from "../Life/Life";
import Music from "../Music/Music";

import Popular from "../Popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
