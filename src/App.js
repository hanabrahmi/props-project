import React from "react";
import PlayersList from "./Components/PlayerList";

function App() {
  const playerStyle = {
    display: "flex",
    justifyContent: "center",
    color: "white"
  };
  return (
    <div className="App">
      <h1 style={playerStyle}> FIFA Player </h1>
      <PlayersList />
    </div>
  );
}

export default App;

