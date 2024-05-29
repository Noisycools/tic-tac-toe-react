export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((log, index) => (
        <li
          key={`${log.square.row}${log.square.col}`}
          className={index === 0 ? "highlighted" : "undefined"}
        >{`Player ${log.playerSymbol} placed in coordinate (${log.square.row}, ${log.square.col})`}</li>
      ))}
    </ol>
  );
}
