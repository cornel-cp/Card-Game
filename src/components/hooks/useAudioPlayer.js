import { useState } from 'react';

const useAudioPlayer = () => {
  const [audio, setAudio] = useState(null);

  const play = (src) => {
    let audioInstance = audio;

    if (!audioInstance) {
      audioInstance = new Audio(src);
      setAudio(audioInstance);
    } else {
      audioInstance.src = src;
    }

    audioInstance.play();
  };

  return { play };
};

export default useAudioPlayer;
