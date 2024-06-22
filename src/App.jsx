import React, { useState } from "react";
import Player from "./Component/Player.jsx";
import GameBoard from "./Component/GameBoard.jsx";
import Log from "./Component/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./Component/GameOver.jsx";

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [activePlayer , setActivePlayer] = useState('X');
  function handleSquare(row,col){
    setActivePlayer((lastSymbol) => lastSymbol === 'X' ? 'O' : 'X');
    setGameBoard((prevGameboard) => {
      const updatedBoard = [...prevGameboard];
      updatedBoard[row][col] = activePlayer;
      return updatedBoard;
    })
  }
  
    return (

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
          <Player name = "Player1" symbol = "X" className = {activePlayer=== "X" ? "active":""} />
          <Player name = "Player2" symbol = "O" className = {activePlayer=== "O" ? "active":""} />

          </ol>
          <GameBoard gameBoard = {gameBoard} handleSquare = {handleSquare}/>
        </div>
       

      </main>


  );
}

export default App;
