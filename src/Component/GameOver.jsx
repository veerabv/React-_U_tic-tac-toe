import React from "react";

function GameOver({ winner,rematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>IT's a Draw</p>}

      <p>
        <button onClick = {rematch}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
