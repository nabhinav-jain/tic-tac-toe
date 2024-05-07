function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      className={`square ${value == 'X' ? 'text-green' : 'text-orange'} ${isWinningSquare ? 'winning' : ''}`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
