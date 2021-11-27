import React from "react";
import Navigation from "../components/Navigation";
import Devs from "../components/Devs";
const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h2 style={{ display: "flex" }}>
        {" "}
        Je cherche un <div id="textAnim" style={{ marginLeft: "6px" }}></div>
      </h2>
      <Devs />
    </div>
  );
};

export default Home;
