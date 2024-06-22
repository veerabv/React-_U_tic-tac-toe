// import React, { useState } from "react";

// function Player({ initialName, symbol, isActive, onChangeName }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [playerName, setPlayerName] = useState(initialName);
//   function handleClickEdit() {
//     setIsEditing((editing) => !editing); // change state based on previous state
//     if (isEditing) {
//       onChangeName(symbol, playerName);
//     }
//   }
//   function handleChange(event) {
//     setPlayerName(event.target.value);
//   }
//   let playerInfo = <span className="player-name">{playerName}</span>;
//   let buttonLabel = "Edit";
//   if (isEditing) {
//     playerInfo = (
//       <input
//         type="text"
//         required
//         value={playerName}
//         onChange={(event) => handleChange(event, symbol)}
//       />
//     );
//     buttonLabel = "Save";
//   }
//   return (
//     <li className={isActive ? "active" : undefined}>
//       <span className="player">
//         {playerInfo}
//         <span className="player-symbol">{symbol}</span>
//       </span>
//       <button onClick={handleClickEdit}>{buttonLabel}</button>
//     </li>
//   );
// }

// export default Player;



import React ,{useState} from 'react';

function Player({name,symbol,...otherProps}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleNameCahnges(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li {...otherProps}>
    <span className="player">
      {!isEditing && (<span className="player-name">{playerName}</span>) }
      {isEditing && (<input type="text" required  value={playerName} onChange={handleNameCahnges} />)}
    
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick = {() => setIsEditing((ps) => !ps)}>{isEditing ? "Save" : "Edit"}</button>

  </li>
  )
}

export default Player;
