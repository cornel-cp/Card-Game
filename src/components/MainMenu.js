import { useNavigate } from 'react-router-dom';
import usePreloadAssets from './hooks/usePreloadAssets';
import { images, audio } from './utils/assetPaths';

const MainMenu = () => {
  // Preload to use cache and reduce latency
  usePreloadAssets(images, audio);

  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate('/game');
  };

  const onAboutClick = () => {
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
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Instructions
        </button>
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Cards
        </button>
        <button
          className='btn btn-dark btn-lg menu-btn-width'
          onClick={onAboutClick}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
