import React from "react";

function Log({ turns }) {
  // console.log("////////", turns);
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Selected {turn.square.row},{turn.square.col}{" "}
        </li>
      ))}
    </ol>
  );
}

export default Log;
