import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAudioPlayer from './hooks/useAudioPlayer';
import usePreloadAssets from './hooks/usePreloadAssets';
import { images, audio, click } from './utils/assetPaths';
import HelpModal from './HelpModal';

const MainMenu = () => {
  // Preload to use cache and reduce latency
  usePreloadAssets(images, audio);

  const [showHelpModal, setShowHelpModal] = useState(false);

  const navigate = useNavigate();
  const { play } = useAudioPlayer();

  const navigateToGame = () => {
    navigate('/game');
  };

  const handleHelpClick = () => {
    setShowHelpModal(true);
    play(click);
  };

  const handleAboutClick = () => {
    window.open('https://github.com/ruichen199801/wizard-duel', '_blank');
  };

  return (
    <div className='d-flex flex-column bg-menu vh-100 justify-content-center align-items-center'>
      <p className='font-cinzel-semibold menu-title-fs mb-5'>Wizard Duel</p>
      <div className='d-flex flex-column mt-5'>
        <button
          className='btn btn-dark btn-lg menu-btn-width mb-3'
          onClick={navigateToGame}
        >
          Play
        </button>
        <button
          className='btn btn-dark btn-lg menu-btn-width mb-3'
          onClick={handleHelpClick}
        >
          Instructions
        </button>
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Cards
        </button>
        <button
          className='btn btn-dark btn-lg menu-btn-width'
          onClick={handleAboutClick}
        >
          About
        </button>
      </div>

      {/* Components rendered on demand */}
      <HelpModal
        showHelpModal={showHelpModal}
        setShowHelpModal={setShowHelpModal}
      />
    </div>
  );
};

export default MainMenu;
