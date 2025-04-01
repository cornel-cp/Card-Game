import { exitToMenu, resetGame, startLevel } from '../utils/commonUtils';
import { finalLevel } from '../../game/level';
import { click } from '../utils/assetPaths';

const GameoverModal = ({
  showGameoverModal,
  setShowGameoverModal,
  setShowNextLevelModal,
  setShowSelectPowerModal,
  winner,
  playAudio,
  level,
}) => {
  if (!showGameoverModal) {
    return null;
  }

  const gameoverMessage = {
    0: (() => {
      const currentLevelInt = parseInt(level);
      const finalLevelInt = parseInt(finalLevel);
      switch (currentLevelInt) {
        case finalLevelInt - 1:
          return 'You have advanced to the final level!';
        case finalLevelInt:
          return 'You defeated every opponent and saved the world! Thanks for playing, and stay tuned for more updates!';
        default:
          return 'You have advanced to the next level!';
      }
    })(),
    1: 'Defeated... better luck next time!',
  };

  const gameoverTitle = {
    0: 'Congratulations',
    1: 'Game Over',
  };

  const handleShowNextLevelModal = () => {
    setShowGameoverModal(false);

    if (parseInt(level) === parseInt(finalLevel) - 1) {
      setShowSelectPowerModal(true);
    } else {
      setShowNextLevelModal(true);
    }

    playAudio(click);
  };

  return (
    <>
      <div
        className='modal fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal'>
            <div className='modal-header border-0'>
              <h3 className='modal-title w-100 text-center font-lora-bold'>
                {gameoverTitle[winner] || 'Game Over'}
              </h3>
            </div>
            <div className='modal-body'>
              <p className='ms-2 mb-4 gameover-text'>
                {gameoverMessage[winner] ||
                  'Time runs out, the duel ends in a draw.'}
              </p>

              {level === finalLevel && winner === '0' && (
                <p className='ms-2 mb-4 gameover-text fst-italic text-muted'>
                  Cheat code: Open Settings menu and click the header 6 times to
                  skip early levels.
                </p>
              )}
            </div>

            <div className='modal-footer border-0 justify-content-end'>
              {winner === '0' ? (
                level === finalLevel ? (
                  // Case 1: Player wins the final level
                  <>
                    <button
                      type='button'
                      className='btn btn-secondary me-2'
                      onClick={exitToMenu}
                    >
                      Menu
                    </button>

                    <button
                      type='button'
                      className='btn btn-dark'
                      onClick={resetGame}
                    >
                      Reset Game
                    </button>
                  </>
                ) : (
                  // Case 2: Player wins a level that is not the final level
                  <>
                    <button
                      type='button'
                      className='btn btn-dark'
                      onClick={handleShowNextLevelModal}
                    >
                      Continue
                    </button>
                  </>
                )
              ) : (
                // Case 3: Player loses any level
                <>
                  <button
                    type='button'
                    className='btn btn-secondary me-2'
                    onClick={exitToMenu}
                  >
                    Menu
                  </button>

                  <button
                    type='button'
                    className='btn btn-dark'
                    onClick={startLevel}
                  >
                    {level === '1' ? 'Restart Level' : 'Prev Level'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default GameoverModal;
