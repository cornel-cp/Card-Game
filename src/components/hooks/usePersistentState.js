import { useState, useEffect } from 'react';

/**
 * Custom hook to manage state and sync it with sessionStorage.
 * This can be used to track setting changes except for audio and music, which are handled in their own hooks.
 */
const usePersistentState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const savedValue = sessionStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default usePersistentState;
