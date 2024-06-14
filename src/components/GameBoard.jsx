export default function GameBoard({ selectSquareHandler, gameBoard }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function symbolHandler(rowIndex, colIndex) {
  //   selectSquareHandler();

  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameBoard;
  //   });
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => selectSquareHandler(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
