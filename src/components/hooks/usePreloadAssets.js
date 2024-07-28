import { useEffect } from 'react';

const usePreloadAssets = (imageArray, audioArray, musicArray) => {
  useEffect(() => {
    imageArray.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });

    audioArray.forEach((audioSrc) => {
      const audio = new Audio();
      audio.src = audioSrc;
      audio.preload = 'auto';
    });

    musicArray.forEach((musicSrc) => {
      const music = new Audio();
      music.src = musicSrc;
      music.preload = 'auto';
    });
  }, []);
};

export default usePreloadAssets;
