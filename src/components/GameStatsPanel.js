import CardPile from './CardPile';
import { icon } from './utils/assetPaths';

const GameStatsPanel = ({ G, visibleTurn, showGameStats }) => {
  const shouldMiss = G.globalEffects.shouldMiss?.[visibleTurn - 1];
  const shouldClearEffects =
    G.globalEffects.shouldClearEffects?.[visibleTurn - 1];

  // Highlight turn number for (mutually exclusive) level effects
  const getTurnHighlightStyle = () => {
    if (shouldMiss || shouldClearEffects) {
      return 'text-danger';
    } else {
      return '';
    }
  };

  return (
    <div className='d-flex flex-column'>
      <CardPile />

      {showGameStats && (
        <div className='d-inline-block p-1 mt-2 rounded bg-panel'>
          <div className='d-flex justify-content-center gstats-panel-width'>
            <div className='d-flex align-items-center me-2'>
              <img
                src={icon.level}
                alt='level'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                data-bs-title='Current level'
              />
              <span className='fw-semibold'>{G.level}</span>
            </div>

            <div className='d-flex align-items-center me-2'>
              <img
                src={icon.turn}
                alt='turn'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                data-bs-title='Current turn'
              />

              <span className={`fw-semibold ${getTurnHighlightStyle()}`}>
                {visibleTurn}
              </span>
            </div>

            <div className='d-flex align-items-center'>
              <img
                src={icon.deck}
                alt='deck'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                data-bs-title='Cards left'
              />
              <span className='fw-semibold'>{G.deck.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStatsPanel;
