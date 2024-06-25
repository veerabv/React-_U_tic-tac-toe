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

function derivedActivePlayer(turns) {
  let currentPlayer = "X";
  if(turns.length>0 && turns[0].player === 'X'){
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  let winner;
  const [gameTurns, setGameTurns] = useState([])
   
  const activePlayer = derivedActivePlayer(gameTurns);
  let gameBoard = initialGameBoard   //deriving a state from the props
  
  for (const turn of gameTurns) {
   
    const {square,player} = turn;
    const {row,column} = square;

    gameBoard[row][column] = player;
  }
  for(const combination of WINNING_COMBINATIONS){
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = firstSquare;
    }
  }

 
  function handleSquare(row,col){
   
  
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);
       
      const updatedTurns = [{square : {row: row,column: col},player : currentPlayer},...prevTurns];

      return updatedTurns;
    })
    
  }
  
    return (

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
          <Player name = "Player1" symbol = "X" className = {activePlayer=== "X" ? "active":""} />
          <Player name = "Player2" symbol = "O" className = {activePlayer=== "O" ? "active":""} />

          </ol>
          {winner && <p>You won , {winner}</p>}
          <GameBoard board = {gameBoard} handleSquare = {handleSquare}/>
        </div>
        <Log turns = {gameTurns}/>
       

      </main>


  );
}

export default App;
