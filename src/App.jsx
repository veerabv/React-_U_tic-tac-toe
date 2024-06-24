import React, { useState } from "react";
import Player from "./Component/Player.jsx";
import GameBoard from "./Component/GameBoard.jsx";
import Log from "./Component/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./Component/GameOver.jsx";

function derivedActivePlayer(turns) {
  let currentPlayer = "X";
  if(turns.length>0 && turns[0].player === 'X'){
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
   
  const activePlayer = derivedActivePlayer(gameTurns);

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const [activePlayer , setActivePlayer] = useState('X');
  function handleSquare(row,col){
    // setActivePlayer((lastSymbol) => lastSymbol === 'X' ? 'O' : 'X');.
  
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);
     
      const updatedTurns = [{square : {row: row,column: col},player : currentPlayer},...prevTurns];

      return updatedTurns;
    })
    // setGameBoard((prevGameboard) => {
    //   const updatedBoard = [...prevGameboard];
    //   updatedBoard[row][col] = activePlayer;
    //   return updatedBoard;
    // })
  }
  
    return (

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
          <Player name = "Player1" symbol = "X" className = {activePlayer=== "X" ? "active":""} />
          <Player name = "Player2" symbol = "O" className = {activePlayer=== "O" ? "active":""} />

          </ol>
          <GameBoard turns = {gameTurns} handleSquare = {handleSquare}/>
        </div>
        <Log turns = {gameTurns}/>
       

      </main>


  );
}

export default App;
