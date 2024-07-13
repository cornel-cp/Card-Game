import { GameState } from './utils/constants';

const EndTurnButton = ({ gameState, handleEndTurnButtonClick }) => {
  const buttonStyles = {
    [GameState.endTurnDisabled]: 'btn-secondary',
    [GameState.endTurnEnabled]: 'btn-dark',
    [GameState.aiTurn]: 'btn-secondary',
  };

  return (
    <div className='d-flex justify-content-end'>
      <button
        className={`btn btn-lg ${buttonStyles[gameState]}`}
        onClick={handleEndTurnButtonClick}
        disabled={gameState !== GameState.endTurnEnabled}
      >
        {gameState === GameState.aiTurn ? 'AI Turn' : 'End Turn'}
      </button>
    </div>
  );
};

export default EndTurnButton;
