import { BattleState } from './clientUtils/constants';

const EndTurnButton = ({ battleState, handleEndTurnButtonClick }) => {
  const buttonStyles = {
    [BattleState.END_TURN_DISABLED]: 'btn-secondary',
    [BattleState.END_TURN_ENABLED]: 'btn-dark',
    [BattleState.AI_TURN]: 'btn-secondary',
  };

  return (
    <div className='d-flex justify-content-end'>
      <button
        className={`btn btn-lg ${buttonStyles[battleState]}`}
        onClick={handleEndTurnButtonClick}
        disabled={battleState !== BattleState.END_TURN_ENABLED}
      >
        {battleState === BattleState.AI_TURN ? 'AI Turn' : 'End Turn'}
      </button>
    </div>
  );
};

export default EndTurnButton;
