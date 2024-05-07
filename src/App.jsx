import Board from './components/Board';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './StatusMessage';
import History from './components/History';

const NEW_GAME = [
  {
    squares: Array(9).fill(null),
    isXNext: false,
  },
];
function App() {
  const reset = () => {
    setCurrentMove(0);
    setHistory(NEW_GAME);
  };

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);

  const handlesquareClick = clickedPosition => {
    // if (gamingBoard.squares[clickedPosition] || winner) {
    //   return;
    // }
    // setHistory(currentHistory => {
    //   const isTraversing = currentMove + 1 == currentHistory.length;

    //   const lastGamingState = isTraversing
    //     ? currentHistory[currentMove]
    //     : currentHistory[currentHistory.length - 1];

    //   const nextSquareState = lastGamingState.squares.map(
    //     (squareValue, position) => {
    //       if (position == clickedPosition) {
    //         return lastGamingState.isXNext ? 'X' : 'O';
    //       }
    //       return squareValue;
    //     }
    //   );

    //   const base = isTraversing
    //     ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
    //     : currentHistory;

    //   return base.concat({
    //     squares: nextSquareState,
    //     isXNext: !lastGamingState.isXNext,
    //   });
    // });
    // setCurrentMove(prev => prev + 1);

    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const lastGamingState = currentHistory[currentMove];
      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (position == clickedPosition) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const newHistory = currentHistory.slice(0, currentMove + 1);
      return newHistory.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => setCurrentMove(move);

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handlesquareClick={handlesquareClick}
        winningSquares={winningSquares}
      />
      <h2>Current Game history</h2>
      <button
        onClick={() => {
          reset();
        }}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
