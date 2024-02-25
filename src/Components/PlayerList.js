import React from "react";
import Player from "./Player";
import playersData from "../players";

const PlayersList = () => {
    const playerContainerStyle = {
        display: "flex",
        justifyContent: "space-between"
      };
  return (
    <div style={playerContainerStyle}>
      {playersData.map(player => (
        <Player
          key={player.name}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;
