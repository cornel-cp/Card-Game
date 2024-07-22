import useAudioPlayer from './hooks/useAudioPlayer';
import { click } from './utils/assetPaths';

const HelpModal = ({ showHelpModal, setShowHelpModal }) => {
  const { play } = useAudioPlayer();

  if (!showHelpModal) {
    return null;
  }

  const handleHelpClose = () => {
    setShowHelpModal(false);
    play(click);
  };

  return (
    <>
      <div
        className='modal fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
          <div className='modal-content bg-modal h-50'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                Game Instructions
              </h4>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleHelpClose}
              ></button>
            </div>

            <div className='modal-body'>
              <ol>
                <li className='mb-2'>
                  Two players alternate turns. You go first.
                </li>
                <li className='mb-2'>
                  Both players share a deck and start with <b>5</b> cards.
                </li>
                <li className='mb-2'>
                  Each turn, a player can play <b>only one</b> card from hand.
                </li>
                <li className='mb-2'>
                  Click a card to preview it, then click "End Turn" to play it.
                </li>
                <li className='mb-2'>
                  Game is over if a player's HP drops to <b>0</b> or after{' '}
                  <b>50</b> turns.
                </li>
                <li className='mb-2'>
                  Card effects will last until removed by another card effect.
                </li>
                <li>
                  Damage = (card damage + player attack - opponent defense),
                  modifiers applied afterward.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default HelpModal;
