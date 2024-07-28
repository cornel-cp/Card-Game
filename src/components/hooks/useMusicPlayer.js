import { useState, useEffect } from 'react';

const useMusicPlayer = (src) => {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const musicInstance = new Audio(src);

    musicInstance.loop = true;
    // musicInstance.muted = true; // Initially muted due to browser restrictions
    musicInstance.pause();

    setMusic(musicInstance);
  }, []);

  const playMusic = () => {
    // if (music && music.muted) {
    //   music.muted = false;
    //   music.play().catch((err) => {
    //     console.error('Playback error: ', err);
    //   });
    // }
    if (music) {
      music.play().catch((err) => {
        console.error('Playback error: ', err);
      });
    }
  };

  const pauseMusic = () => {
    if (music) {
      music.pause();
      // music.muted = true;
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
