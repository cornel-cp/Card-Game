import { levelConfigs, finalLevel } from './level';
import { Wish2, Wish3, Wish4, Wish5 } from '../data/cards';

/**
 * Shuffle a deck of cards using Fisher-Yates algorithm.
 */
export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

/**
 * Deal cards to a player's hand until it contains 5 cards.
 */
export const dealCards = (hand, deck) => {
  hand.push(...deck.splice(0, 5 - hand.length));
};

/**
 * Remove a card from the player's hand by index.
 */
export const removeCard = (hand, index) => {
  if (index !== -1) {
    hand.splice(index, 1);
  }
};

/**
 * Log the details of the current turn and game state in browser.
 */
export const logPlay = (G, ctx, card) => {
  const p = G.players[ctx.currentPlayer];
  console.log(`Turn ${ctx.turn}: ${p.name} played ${card.name} (${card.text})`);
  Object.keys(G.players).forEach((pid) => {
    const p = G.players[pid];
    console.log(
      `%c${p.name}: HP: ${p.hp}, Attack: ${p.atk}, Shield: ${p.def}`,
      `color: ${pid === '0' ? 'blue' : 'red'}`
    );
  });
};

/**
 * Determine if the game has ended and return the result.
 */
export const isVictory = ({ G, ctx }) => {
  if ((G.players[0].hp <= 0 && G.players[1].hp <= 0) || ctx.turn >= 50) {
    return { draw: true };
  } else if (G.players[0].hp <= 0) {
    return { winner: '1' };
  } else if (G.players[1].hp <= 0) {
    return { winner: '0' };
  }
};

/**
 * Handle the end of game logic.
 *  1. Print game result in the console.
 *  2. Progress or reset the level based on the game result.
 */
export const onGameEnd = ({ G, ctx }) => {
  if (!ctx.gameover.winner) {
    console.log('Draw!');
  } else {
    console.log(`${G.players[ctx.gameover.winner].name} wins!`);
  }

  // Enter next level when player wins, otherwise restarts from the last level.
  //  - If current level is the first level of the game, do nothing.
  //  - If current level is the final level of the game, do nothing.
  if (ctx.gameover.winner && ctx.gameover.winner === '0') {
    setNextLevel();
  } else {
    setPrevLevel();
  }
};

/**
 * Function used for AI simulation.
 */
export const generateAIMoves = (G, ctx) => {
  let moves = [];
  G.players[ctx.currentPlayer].hand.forEach((card) => {
    moves.push({ move: 'playCard', args: [card] });
  });
  return moves;
};

/**
 * Get current game level.
 */
export const getCurrentLevel = () => {
  try {
    return sessionStorage.getItem('level') || '1';
  } catch (e) {
    console.error('Error parsing sessionStorage data:', e);
  }
};

/**
 * Set game to previous level.
 */
export const setPrevLevel = () => {
  try {
    const currentLevel = getCurrentLevel();
    if (currentLevel === '1') {
      return;
    }
    const prevLevel = parseInt(currentLevel, 10) - 1;
    sessionStorage.setItem('level', prevLevel);
  } catch (e) {
    console.error('Error saving to sessionStorage:', e);
  }
};

/**
 * Set game to next level.
 */
export const setNextLevel = () => {
  try {
    const currentLevel = getCurrentLevel();
    if (currentLevel === finalLevel) {
      return;
    }
    const nextLevel = parseInt(currentLevel, 10) + 1;
    sessionStorage.setItem('level', nextLevel);
  } catch (e) {
    console.error('Error saving to sessionStorage:', e);
  }
};

/**
 * Apply overrides to game state G based on the current level.
 */
export const applyLevelOverride = (G) => {
  const {
    playerStatsOverride,
    enemyStatsOverride,

    playerHandOverride,
    enemyHandOverride,

    playerEffectsOverride,
    enemyEffectsOverride,

    globalEffectsOverride,
  } = levelConfigs[G.level];

  for (let key in playerStatsOverride) {
    if (playerStatsOverride.hasOwnProperty(key)) {
      if (key in G.players[0]) {
        G.players[0][key] = playerStatsOverride[key];
      }
    }
  }
  for (let key in enemyStatsOverride) {
    if (enemyStatsOverride.hasOwnProperty(key)) {
      if (key in G.players[1]) {
        G.players[1][key] = enemyStatsOverride[key];
      }
    }
  }

  G.players[0].hand.push(...playerHandOverride);
  G.players[1].hand.push(...enemyHandOverride);

  G.players[0].effects.push(...playerEffectsOverride);
  G.players[1].effects.push(...enemyEffectsOverride);

  G.globalEffects.push(...globalEffectsOverride);
};

/**
 * Apply effects to the player's hand at the start of their turn.
 */
export const applyHandEffects = (G, ctx) => {
  const replaceWishCards = (hand) => {
    const replacementOptions = [Wish2, Wish3, Wish4, Wish5];

    return hand.map((card) => {
      if (card.name === 'Wish') {
        const availableOptions = replacementOptions.filter(
          (option) => option.id !== card.id
        );
        return availableOptions[
          Math.floor(Math.random() * availableOptions.length)
        ];
      } else {
        return card;
      }
    });
  };

  // Transform `Wish` to a random effect
  G.players[ctx.currentPlayer].hand = replaceWishCards(
    G.players[ctx.currentPlayer].hand
  );
};
