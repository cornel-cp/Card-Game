const GameoverModal = ({ showGameoverModal, winner, handleRestart }) => {
  if (!showGameoverModal) {
    return null;
  }

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
                {winner === '0'
                  ? 'You have bested your opponent!'
                  : 'Defeated... better luck next time!'}
              </p>
            </div>

            <div className='modal-footer border-0 justify-content-end'>
              <button type='button' className='btn btn-secondary me-2'>
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
