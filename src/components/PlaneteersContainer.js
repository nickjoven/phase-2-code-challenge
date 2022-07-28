import React from "react";
import Planeteer from "./Planeteer";

const PlaneteersContainer = ({ planeteers} ) => {
  return (
    <ul className="cards">
      {planeteers.map((planeteer) => {
        const { id, name, fromUSA, born, bio, quote, pictureUrl, twitter } = planeteer
        return (
          <Planeteer 
            key={id}
            name={name}
            fromUSA={fromUSA}
            born={born}
            bio={bio}
            quote={quote}
            pictureUrl={pictureUrl}
            twitter={twitter}
          />
        )
      })}
    </ul>
  );
}

export default PlaneteersContainer;
