import { exitToMenu, restartGame } from '../utils/utils';
import { click } from '../utils/assetPaths';

const SettingsModal = ({
  showSettingsModal,
  setShowSettingsModal,
  playAudio,
  toggleAudioMute,
}) => {
  if (!showSettingsModal) {
    return null;
  }

  const handleSettingsClose = () => {
    setShowSettingsModal(false);
    playAudio(click);
  };

  return (
    <>
      <div
        className='modal modal-sm fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold ms-3'>
                Settings
              </h4>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleSettingsClose}
              ></button>
            </div>

            <div className='modal-body'>
              <div className='d-flex flex-column align-items-center'>
                {/* Sound setting is effective for current game only and is not persistent */}
                <button
                  type='button'
                  className='btn btn-dark btn-width mb-3'
                  onClick={toggleAudioMute}
                >
                  Toggle Sound
                </button>

                {/* <button type='button' className='btn btn-dark btn-width mb-3'>
                  Toggle Music
                </button> */}

                <button
                  type='button'
                  className='btn btn-dark btn-width mb-3'
                  onClick={restartGame}
                >
                  Restart Game
                </button>

                <button
                  type='button'
                  className='btn btn-dark btn-width mb-1'
                  onClick={exitToMenu}
                >
                  Exit to Title
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default SettingsModal;
