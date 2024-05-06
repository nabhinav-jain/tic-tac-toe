import React from 'react';

function statusMessage({ winner, isXNext, squares }) {
  const noMovesLeft = squares.every(value => value != null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return <div>Game is tied</div>;
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
}

export default statusMessage;
