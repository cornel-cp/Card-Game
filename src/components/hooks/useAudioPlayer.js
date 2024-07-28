import { useState } from 'react';

const useAudioPlayer = () => {
  const [audio, setAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const playAudio = (src) => {
    let audioInstance = audio;

    if (!audioInstance) {
      audioInstance = new Audio(src);
      setAudio(audioInstance);
    } else {
      audioInstance.src = src;
    }

    audioInstance.muted = isMuted;
    audioInstance.play();
  };

  const toggleAudioMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
    }
    setIsMuted(!isMuted);
  };

  return { playAudio, toggleAudioMute };
};

export default useAudioPlayer;
