// PlayersList.js
import React from "react";
import players from "../players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap",}}>
      {players.map((item) => {
        return <Player {...item} />;
      })}
    </div>
  );
};

export default PlayersList;
