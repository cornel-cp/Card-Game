import { useState } from 'react';
import {
  avatarSmallScale,
  avatarHeight,
  avatarWidth,
} from '../utils/constants';
import { getAvatarForLevel, click } from '../utils/assetPaths';
import { powers } from '../utils/scripts';
import { startLevel } from '../utils/commonUtils';
import useImageLoader from '../hooks/useImageLoader';
import { GameMode } from '../../game/power';

const SelectPowerModal = ({ showSelectPowerModal, playAudio }) => {
  const [selectedPowerClass, setSelectedPowerClass] = useState(null);

  const avatars = [powers.map((power) => getAvatarForLevel(power.level))];
  const { isLoading } = useImageLoader(avatars, 300);

  if (!showSelectPowerModal) {
    return null;
  }

  const handleSelectPower = (power) => {
    setSelectedPowerClass(power.class);
    playAudio(click);
  };

  const handleNextLevel = (mode) => {
    if (selectedPowerClass) {
      sessionStorage.setItem('power', selectedPowerClass);
      sessionStorage.setItem('mode', mode);
      startLevel();
    }
  };

  return (
    <>
      <div
        className='modal modal-lg fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                Pick Your Power
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
                  <p className='pwr-text pb-3'>
                    Take a power from a past opponent to use in the upcoming
                    boss fight, <i>but at a cost!</i>
                  </p>

                  <div className='d-flex justify-content-center'>
                    {powers.map((power) => (
                      <div
                        key={power.class}
                        className={`pwr-li text-center p-2 rounded ${
                          selectedPowerClass === power.class
                            ? `border pwr-border-${power.class} shadow`
                            : ''
                        }`}
                        onClick={() => handleSelectPower(power)}
                      >
                        <img
                          src={getAvatarForLevel('1', power.level)}
                          alt={power.name}
                          height={avatarHeight * avatarSmallScale}
                          width={avatarWidth * avatarSmallScale}
                        />
                        <p className='mt-2 fw-bold'>{power.name}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className='modal-footer border-0 justify-content-end'>
              <button
                type='button'
                className='btn btn-dark'
                onClick={() => handleNextLevel(GameMode.normal)}
                disabled={!selectedPowerClass}
              >
                Next Level: Normal
              </button>

              <button
                type='button'
                className='btn btn-dark'
                onClick={() => handleNextLevel(GameMode.hard)}
                disabled={!selectedPowerClass}
              >
                Next Level: Hard
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default SelectPowerModal;
