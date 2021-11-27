import React from "react";
const Tags = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};
const Devscards = ({ personnage }) => {
  return (
    <>
      <div className="cardPersonnage">
        <h3>{personnage.name} </h3>
        <p>
          {personnage.city}, {personnage.country}{" "}
        </p>
        <p className="tagLine">{personnage.tagline} </p>
        <p>{personnage.price} $ /jour </p>
        <div className="tagContainer">
          {personnage.tags.map((tag, index) => (
            <Tags tag={tag} key={index}></Tags>
          ))}
        </div>
      </div>
    </>
  );
};

export default Devscards;
