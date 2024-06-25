import React, { useState } from "react";
import Player from "./Component/Player.jsx";
import GameBoard from "./Component/GameBoard.jsx";
import Log from "./Component/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./Component/GameOver.jsx";

const PlayerSymbol = {X : "Smile 1" , O : "Smile 2"}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveGameboard(gameTurns){
  let gameBoard = [...initialGameBoard.map(array => [...array])]; 
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }
  return gameBoard;
}
function derivedWinner(gameBoard,player){
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = player[firstSquare];
    }
  }
  return winner
}
function App() {
  
  const [gameTurns, setGameTurns] = useState([]);
  const [player , setPlayer] = useState(PlayerSymbol);

  const activePlayer = derivedActivePlayer(gameTurns);
  let gameBoard = deriveGameboard(gameTurns);
 let winner = derivedWinner(gameBoard,player);

  let checkDarw = gameTurns.length === 9 && !winner;

  function handleSquare(row, col) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: row, column: col }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function rematch() {
    setGameTurns([]);
  }

  function handlePlayer(symbol, player){
    setPlayer((prevState) =>  {
      return { ...prevState,[symbol]: player}
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={player.X}
            symbol="X"
            className={activePlayer === "X" ? "active" : ""}
            handlePlayer = {handlePlayer}
          />
          <Player
            name={player.O}
            symbol="O"
            className={activePlayer === "O" ? "active" : ""}
            handlePlayer = {handlePlayer}
          />
        </ol>
        {(winner || checkDarw) && <GameOver winner={winner}  rematch = {rematch}/>}
        <GameBoard board={gameBoard} handleSquare={handleSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
