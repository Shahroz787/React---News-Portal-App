import React from "react";
import ad from "../../../Assets/ad.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <h1 id="logo">Shah News</h1>
          </div>
          <div className="ad">
            <img src={ad} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
