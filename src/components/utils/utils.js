export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const exitToMenu = () => {
  // Use full page rerender to keep the game state clean
  window.location.href = '/';
};

export const restartGame = () => {
  window.location.reload();
  // The alternative is to call reset() and clean up manual states on the client side
};
