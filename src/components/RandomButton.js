import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

const RandomButton = ({ handleAddPlaneteer }) => {

  const handleClickPersist = async (rando) => {
    await fetch('http://localhost:8003/planeteers', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rando)
    })
    .then(req => req.json())
    .then(res => {
      handleAddPlaneteer(res)
    })

  }

  const handleClick = () => {
    const randomPlaneteer = getRandomPlaneteer();
    handleClickPersist(randomPlaneteer)
    alert(`${randomPlaneteer.name} has joined the fight!`)
    // console.log("For the advanced deliverables", randomPlaneteer);
  }

  

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
