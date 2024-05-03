const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ selectSquareHandler, gameTurns }) {
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;

    gameBoard[row][col] = playerSymbol;
  }

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
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>
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
