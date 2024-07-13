const GameoverModal = ({ showGameoverModal, winner, handleRestart }) => {
  if (!showGameoverModal) {
    return null;
  }

  const gameoverMessage = {
    0: 'Player wins!',
    1: 'AI wins!',
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
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Game Over</h5>
            </div>
            <div className='modal-body'>
              {gameoverMessage[winner] || 'Draw!'}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleRestart}
              >
                Restart Game
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
