import { useEffect } from 'react';

const usePreloadAssets = (
  imageArray,
  animationArray,
  audioArray,
  musicArray
) => {
  useEffect(() => {
    imageArray.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });

    animationArray.forEach((animationSrc) => {
      const gif = new Image();
      gif.src = animationSrc;
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
