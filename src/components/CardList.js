import React from "react";
import Card from "./Card";

const CardList = ({ Data }) => {
  const cardsComponents = Data.map(product => {
    return (
      <Card
        key={product.id}
        id={product.id}
        name={product.name}
        volume={product.volume}
        offense={product.offense}
        sause={product.sause}
      />
    );
  });
  return <div>{cardsComponents}</div>;
};

export default CardList;
