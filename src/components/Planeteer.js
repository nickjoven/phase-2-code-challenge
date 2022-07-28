import React, { useState } from "react";

const currentDate = new Date().getFullYear()

const Planeteer = ({ name, fromUSA, born, bio, quote, pictureUrl, twitter }) => {
  const [displayBio, setDisplayBio] = useState(true)
  
  const handleToggleBio = () => {
    setDisplayBio(displayBio => !displayBio)
  }
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          style={{'cursor': 'pointer'}}
          alt={name}
          className="card__image"
          onClick={handleToggleBio}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <div className="card__title">{`Age: ${currentDate - born}`}</div>
          <p className="card__text">
            {
              displayBio
              ? bio
              : quote
            }
          </p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {
                fromUSA
                ? 'USA-BASED'
                : 'Working Overseas'
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
