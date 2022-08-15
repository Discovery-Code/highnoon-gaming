import React, { useState } from "react";
import { GamesContainer } from "./gamesStyle";

const Games = () => {
  const [value, setValue] = useState(0);

  return (
    <GamesContainer>
      <div className="carousel-container">
        <ul>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
          <li style={{ right: `${value * 20}%` }}>
            <div className="game-image"> </div> <div className="systems"></div>
          </li>
        </ul>
      </div>

      <div className="carousel-slider--container">
        <input
          type="range"
          min="0"
          max="5"
          step=".1"
          value={value}
          id="cSlider"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </GamesContainer>
  );
};

export default Games;
