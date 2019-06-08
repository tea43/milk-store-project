import React from "react";
import "./Card.css";

const Card = props => {
  const {id, name, offense, volume, sause} = props;
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img id={id} src={sause} alt="products" />
      <div>
        <h2>Product Name: {name}</h2>
        <p>Offense level: {offense}</p>
        <p>Volume: {volume}</p>
      </div>
    </div>
  );
};

export default Card;
