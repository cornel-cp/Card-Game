import {
  avatarSmallScale,
  avatarHeight,
  avatarWidth,
} from '../utils/constants';
import { getAvatarForLevel } from '../utils/assetPaths';
import {
  getEnemyName,
  getBattleStartCaption,
  getBattleInstructions,
} from '../utils/scripts';
import useImageLoader from '../hooks/useImageLoader';

const MatchupModal = ({
  showMatchupModal,
  setShowMatchupModal,
  playMusic,
  level,
  scale = avatarSmallScale,
}) => {
  const playerAvatar = getAvatarForLevel('0', level);
  const enemyAvatar = getAvatarForLevel('1', level);

  const { isLoading } = useImageLoader([playerAvatar, enemyAvatar], 300);

  if (!showMatchupModal) {
    return null;
  }

  const handleMatchupClose = () => {
    setShowMatchupModal(false);
    playMusic();
  };

  const height = avatarHeight * scale;
  const width = avatarWidth * scale;

  const instructions = getBattleInstructions(level);

  return (
    <>
      <div
        className='modal fade show d-block'
        data-bs-keyboard='false'
        tabIndex='-1'
        onClick={handleMatchupClose} // Close modal when clicking anywhere
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                {getBattleStartCaption(level)}
              </h4>
            </div>

            <div className='modal-body'>
              {isLoading ? (
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='text-center'>
                      <img
                        src={playerAvatar}
                        alt='avatar'
                        height={height}
                        width={width}
                      />
                      <p className='mt-2 fw-bold'>You</p>
                    </div>

                    <h5 className='mb-5'>VS</h5>

                    <div className='text-center'>
                      <img
                        src={enemyAvatar}
                        alt='avatar'
                        height={height}
                        width={width}
                      />
                      <p className='mt-2 fw-bold'>{getEnemyName(level)}</p>
                    </div>
                  </div>

                  <div className='w-80 mx-auto mt-2'>
                    <p>
                      {instructions.intro}
                      <b>{instructions.levelRule}</b>
                      {instructions.outro}
                    </p>
                  </div>

                  {instructions.tips !== '' && (
                    <div className='w-80 mx-auto'>
                      <p className='fst-italic text-muted'>
                        {instructions.tips}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className='modal-footer border-0 justify-content-end'>
              <button type='button' className='btn btn-dark'>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default MatchupModal;
