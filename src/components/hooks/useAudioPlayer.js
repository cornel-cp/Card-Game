import { useState, useEffect } from 'react';

const useAudioPlayer = () => {
  const [audio, setAudio] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(() => {
    return JSON.parse(sessionStorage.getItem('isAudioMuted')) || false;
  });

  useEffect(() => {
    sessionStorage.setItem('isAudioMuted', JSON.stringify(isAudioMuted));
  }, [isAudioMuted]);

  const playAudio = (src) => {
    let audioInstance = audio;
    if (!audioInstance) {
      audioInstance = new Audio(src);
      setAudio(audioInstance);
    } else {
      audioInstance.src = src;
    }

    audioInstance.muted = isAudioMuted;
    audioInstance.play().catch((err) => {
      console.error('Playback error: ', err);
    });
  };

  const toggleAudioMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
    }
    setIsAudioMuted(!isAudioMuted);
  };

  return { playAudio, toggleAudioMute, isAudioMuted };
};

export default useAudioPlayer;
