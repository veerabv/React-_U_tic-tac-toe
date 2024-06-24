// import React from "react";

// function GameBoard({ onSelectSquare, board }) {
//   //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   //   function handleSelectSquare(rowId, colIndex) {
//   //     setGameBoard((prevGameBoard) => {
//   //       const updatedBoard = [
//   //         ...prevGameBoard.map((innerArray) => [...innerArray]),
//   //       ];
//   //       updatedBoard[rowId][colIndex] = activePlayer;
//   //       return updatedBoard;
//   //     });
//   //     onSelectSquare();
//   //   }
//   // console.log(initialGameBoard, "[]][]][]][[][]");
//   // let gameBoard = initialGameBoard;
//   // // console.log(gameBoard, "///////////////////");
//   // for (const turn of turns) {
//   //   const { square, player } = turn;
//   //   const { row, col } = square;
//   //   gameBoard[row][col] = player;
//   // }

//   return ( 
//     <ol id="game-board">
//       {board.map((row, rowId) => (
//         <li key={rowId}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 {/* <button onClick={() => handleSelectSquare(rowId, colIndex)}> */}
//                 <button
//                   onClick={() => onSelectSquare(rowId, colIndex)}
//                   disabled={playerSymbol !== null}
//                 >
//                   {playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }

// export default GameBoard;


import React , {useState}  from 'react';

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

function GameBoard({turns,handleSquare}) {
  let gameBoard = initialGameBoard   //deriving a state from the props
  for (const turn of turns) {
    const {square,player} = turn;
    const {row,column} = square;
    console.log(row,column,"::::::::::::::::::::");
    gameBoard[row][column] = player;
  }
  
  console.log(gameBoard);
 
  return (
    <ol id="game-board">
      {gameBoard.map((row ,rowIndex ) => (<li key = {rowIndex}>
        <ol>
          {row.map((symbol,colIndex) =>(<li key={colIndex}><button 
          onClick = {() => handleSquare(rowIndex,colIndex)}>{symbol}</button></li>))}
        </ol>
      </li>))}

    </ol>
  )
}

export default GameBoard
