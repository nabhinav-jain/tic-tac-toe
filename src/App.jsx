import Board from './components/Board';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handlesquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
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

  return (
    <div className="app">
      <StatusMessage winner={winner} squares={squares} isXNext={isXNext} />
      <Board squares={squares} handlesquareClick={handlesquareClick} />
    </div>
  );
}

export default App;
