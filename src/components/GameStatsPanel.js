import CardPile from './CardPile';
import { icon } from './utils/assetPaths';

const GameStatsPanel = ({ level, visibleTurn, deckSize, showGameStats }) => {
  return (
    <div className='d-flex flex-column'>
      <CardPile />

      {showGameStats && (
        <div className='d-flex mt-2'>
          <div className='d-flex align-items-center me-2'>
            <img
              src={icon.level}
              alt='level'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-title='Current level'
            />
            <span className='fw-semibold'>{level}</span>
          </div>

          <div className='d-flex align-items-center me-2'>
            <img
              src={icon.turn}
              alt='turn'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-title='Current turn'
            />
            <span className='fw-semibold'>{visibleTurn}</span>
          </div>

          <div className='d-flex align-items-center'>
            <img
              src={icon.deck}
              alt='deck'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              data-bs-title='Cards left'
            />
            <span className='fw-semibold'>{deckSize}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStatsPanel;
