const GameoverModal = ({ showGameoverModal, winner }) => {
  if (!showGameoverModal) {
    return null;
  }

  const reloadMenu = () => {
    // Use full page reload to keep the game state clean
    window.location.href = '/';
  };

  const handleRestart = () => {
    window.location.reload();
    // The alternative is to call reset() and clean up manual states on the client side
  };

  const gameoverMessage = {
    0: 'You have bested your opponent!',
    1: 'Defeated... better luck next time!',
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
                Game Over
              </h3>
            </div>

            <div className='modal-body'>
              <p className='fs-5 ms-2 mb-4'>
                {gameoverMessage[winner] ||
                  'Time runs out, the duel ends in a draw.'}
              </p>
            </div>

            <div className='modal-footer border-0 justify-content-end'>
              <button
                type='button'
                className='btn btn-secondary me-2'
                onClick={reloadMenu}
              >
                Menu
              </button>

              <button
                type='button'
                className='btn btn-dark'
                onClick={handleRestart}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default GameoverModal;
