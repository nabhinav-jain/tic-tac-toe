import Square from './Square';
import { useState } from 'react';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handlesquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (position == clickedPosition) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handlesquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;