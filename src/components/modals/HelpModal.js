import { click } from '../utils/assetPaths';

const HelpModal = ({ showHelpModal, setShowHelpModal, playAudio }) => {
  if (!showHelpModal) {
    return null;
  }

  const handleHelpClose = () => {
    setShowHelpModal(false);
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
        <div className='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
          <div className='modal-content bg-modal h-50'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                Game Rules
              </h4>
              <button
                type='button'
                className='btn-close'
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
                  The deck is shared and reshuffles when it runs out.
                </li>
                <li className='mb-2'>
                  You draw <b>1</b> card from deck and play <b>1</b> card each
                  turn.
                </li>
                <li className='mb-2'>
                  Click a card to preview it, then click "End Turn" to play it.
                </li>
                <li className='mb-2'>
                  You win the game if your opponent's HP drops to <b>0</b>.
                </li>
                <li className='mb-2'>
                  The game ends in a draw after <b>50</b> turns pass.
                </li>
                <li>
                  Damage is calculated as: (card damage + your attack -
                  opponent's shield) × any modifiers.
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
