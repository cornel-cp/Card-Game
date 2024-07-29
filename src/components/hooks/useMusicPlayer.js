import { useState, useEffect } from 'react';

const useMusicPlayer = (src) => {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const musicInstance = new Audio(src);

    musicInstance.loop = true;
    musicInstance.pause();

    setMusic(musicInstance);
  }, []);

  const playMusic = () => {
    if (music) {
      music.play().catch((err) => {
        console.error('Playback error: ', err);
      });
    }
  };

  const pauseMusic = () => {
    if (music) {
      music.pause();
    }
  };

  const toggleMusic = () => {
    if (music) {
      if (music.paused) {
        music.play().catch((err) => {
          console.error('Playback error: ', err);
        });
      } else {
        music.pause();
      }
    }
  };

  return { playMusic, pauseMusic, toggleMusic };
};

export default useMusicPlayer;
