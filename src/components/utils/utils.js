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

export const sortEffects = (effects) => {
  // Sort by group first (buff then debuff), then name (group same non-unique effects together)
  return effects.sort((a, b) => {
    if (a.group === 'buff' && b.group === 'debuff') {
      return -1;
    } else if (a.group === 'debuff' && b.group === 'buff') {
      return 1;
    } else if (a.group === b.group) {
      if (a.text < b.text) {
        return -1;
      } else if (a.text > b.text) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0; // Keep the original order if groups are the same but texts are different
    }
  });
};
