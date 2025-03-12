/**
 * Pauses execution for a specified time.
 * Example: await sleep(2000);
 */
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Returns to the menu.
 */
export const exitToMenu = () => {
  clearLevel();
  window.location.href = '/'; // Use full page rerender to keep the game state clean
};

/**
 * Restarts the whole game from level 1.
 */
export const resetGame = () => {
  clearLevel();
  window.location.reload();
  // The alternative is to call reset() and clean up manual states on the client side
};

/**
 * Triggers a reload to start a particular level.
 * The level number is set on game end in `gameUtils.js`.
 */
export const startLevel = () => {
  window.location.reload();
};

const clearLevel = () => {
  sessionStorage.removeItem('level');
};

/**
 * Set game to a specific level - FOR TESTING PURPOSE ONLY.
 */
export const jumpToLevel = (level = '1') => {
  setLevelTo(level);
  window.location.reload();
};

const setLevelTo = (level) => {
  try {
    sessionStorage.setItem('level', level);
  } catch (e) {
    console.error('Error saving to sessionStorage:', e);
  }
};
