import React, { useState } from "react";
import Player from "./Component/Player.jsx";
import GameBoard from "./Component/GameBoard.jsx";
import Log from "./Component/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./Component/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// let a = [...initialGameBoard];
// a[0][1] = "as";
// console.log("?????", a);
// console.log("////", initialGameBoard);
// [...initialGameBoard.map((arr) => console.log("///", arr))];
// let b = [...initialGameBoard.map((arr) => [...arr])];
// b[0][1] = "as";
// console.log(">>>>", b);
// console.log("////", initialGameBoard);

// helper function
function getActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}
// component function
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  // const [activePlayer, setActivePlayer] = useState("X");  1
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = getActivePlayer(gameTurns);
  // let gameBoard = initialGameBoard; // here we copy the value by reference so if we restart with this ,we will not get the desired result
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  // console.log(gameBoard, "///////////////////");
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    //   console.log(turn, "????????");
    //   console.log(square, "//////");
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    // console.log(combination);
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const ThirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === ThirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  // console.log("?????", hasDraw);
  function selectHandleSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));  1
    setGameTurns((prevTurns) => {
      let currentPlayer = getActivePlayer(prevTurns);
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurn;
    });
  }
  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    console.log(newName, symbol);
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }
    return (

      <main>
        <div id="game-container">
          <ol id="players">
            <li>
              <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
              </span>

            </li>
            <li>
            <span className="player">
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
            </span>
            </li>

          </ol>

        </div>

      </main>


    // <main>
    //   <div id="game-container">
    //     <ol id="players" className="highlight-player">
    //       <Player
    //         initialName="Player-1"
    //         symbol="X"
    //         isActive={activePlayer === "X"}
    //         onChangeName={handlePlayerNameChange}
    //       />
    //       <Player
    //         initialName="Player-2"
    //         symbol="O"
    //         isActive={activePlayer === "O"}
    //         onChangeName={handlePlayerNameChange}
    //       />
    //     </ol>
    //     {(winner || hasDraw) && (
    //       <GameOver winner={players[winner]} rematch={handleRematch} />
    //     )}
    //     <GameBoard
    //       onSelectSquare={selectHandleSquare}
    //       board={gameBoard}

    //       // activePlayer={activePlayer}
    //     />
    //   </div>
    //   <Log turns={gameTurns} />
    // </main>
  );
}

export default App;
