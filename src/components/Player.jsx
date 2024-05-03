import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function editHandler() {
    setisEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={changeHandler} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => editHandler()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
