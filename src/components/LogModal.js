import useAudioPlayer from './hooks/useAudioPlayer';
import { click } from './utils/assetPaths';

const LogModal = ({ showLogModal, setShowLogModal, logEntries }) => {
  const { play } = useAudioPlayer();

  if (!showLogModal) {
    return null;
  }

  const handleLogClose = () => {
    setShowLogModal(false);
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
                Battle Log
              </h4>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleLogClose}
              ></button>
            </div>

            <div className='modal-body'>
              <ul className='list-group list-group-flush'>
                {logEntries.map((entry, index) => (
                  <li key={index} className='list-group-item bg-modal'>
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default LogModal;
