import { useEffect } from 'react';

const usePreloadAssets = (imageArray, audioArray) => {
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
  }, []);
};

export default usePreloadAssets;
