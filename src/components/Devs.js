import React, { useEffect } from "react";
import axios from "axios";
import Devscards from "./Devscards";
const Devs = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get("./../personnages.json").then((res) => {
      setData(res.data.personnages);
    });
  }, []);

  return (
    <div className="cardContainer">
      {data.map((personnage, index) => (
        <Devscards key={index} personnage={personnage} />
      ))}
    </div>
  );
};

export default Devs;
