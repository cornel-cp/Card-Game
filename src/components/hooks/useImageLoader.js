import { useState, useEffect } from 'react';

/**
 * Custom hook to manage a loading spinner for image-heavy components.
 *
 * The reason we use an artificial delay is that `onLoad` event for images is not triggered at all because images are pre-cached.
 * However, these cached images are transformed and resized in the gallery modal, which takes extra time to render.
 *
 * This hook shows a spinner for a short duration with an intention to cover any rendering delays. In practice, however,
 * the spinner works intermittently, especially when you run `npm start` locally then immediately open the modal in an Incognito tab.
 * However, it should still provide a better user experience by setting clear expectations of a loading phase (when it works).
 */
const useImageLoader = (images = [], delay) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);

    return () => clearTimeout(timer);
  }, [images, delay]);

  return { isLoading };
};

export default useImageLoader;
