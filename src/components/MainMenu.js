import { useState } from 'react';
import useAudioPlayer from './hooks/useAudioPlayer';
import usePreloadAssets from './hooks/usePreloadAssets';
import {
  cardFronts,
  click,
  IMAGES,
  ANIMATION,
  AUDIO,
  MUSIC,
} from './utils/assetPaths';
import CardGalleryModal from './modals/CardGalleryModal';
import HelpModal from './modals/HelpModal';

const MainMenu = () => {
  // Preload to use cache and reduce latency
  usePreloadAssets(IMAGES, ANIMATION, AUDIO, MUSIC);

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showCardGallery, setShowCardGallery] = useState(false);

  const { playAudio } = useAudioPlayer();

  const loadGame = () => {
    // Use full page rerender to keep the game state clean
    window.location.href = '/game';
  };

  const handleHelpClick = () => {
    setShowHelpModal(true);
    playAudio(click);
  };

  const handleCardsClick = () => {
    setShowCardGallery(true);
    playAudio(click);
  };

  const handleAboutClick = () => {
    window.open('https://github.com/cornel-cp/card-game', '_blank');
  };

  return (
    <div className='d-flex flex-column bg-menu vh-100 justify-content-center align-items-center'>
      <div className='d-flex align-items-baseline mb-5'>
        <p className='font-cinzel-semibold menu-title-fs m-0'>Magic Card Duel</p>
        <span className='badge bg-dark ms-2'>v0.19</span>
      </div>

      {/* Without the beta tag
      <p className='font-cinzel-semibold menu-title-fs mb-5'>Wizard Duel</p> */}

      <div className='d-flex flex-column mt-5'>
        <button
          className='btn btn-dark btn-lg btn-width mb-3'
          onClick={loadGame}
        >
          Play
        </button>
        <button
          className='btn btn-dark btn-lg btn-width mb-3'
          onClick={handleHelpClick}
        >
          Instructions
        </button>
        <button
          className='btn btn-dark btn-lg btn-width mb-3'
          onClick={handleCardsClick}
        >
          Cards
        </button>
        <button
          className='btn btn-dark btn-lg btn-width'
          onClick={handleAboutClick}
        >
          About
        </button>
      </div>

      {/* Components rendered on demand */}
      <HelpModal
        showHelpModal={showHelpModal}
        setShowHelpModal={setShowHelpModal}
        playAudio={playAudio}
      />
      <CardGalleryModal
        showCardGallery={showCardGallery}
        setShowCardGallery={setShowCardGallery}
        cardImages={cardFronts.filter((_, cardId) => cardId !== 25)} // Exclude the first Wish card
        playAudio={playAudio}
      />
    </div>
  );
};

export default MainMenu;
