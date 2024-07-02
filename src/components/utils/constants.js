export const BattleState = {
  // State during a player's turn after drawing a card but before clicking a card for preview.
  // The end turn button is labeled as player's turn and is disabled.
  END_TURN_DISABLED: 'end turn disabled',

  // State during a player's turn after previewing a card but before ending the turn.
  // The end turn button is labeled as player's turn and is clickable.
  END_TURN_ENABLED: 'end turn enabled',

  // State after the player ends their turn but before drawing a card ends.
  // The end turn button is labeled as AI's turn and is disabled.
  AI_TURN: 'ai turn',
};

export const CardType = {
  // Required props: cardType, cardName, cardIndex, handleCardClick
  FRONT: 'front',

  // Required props: cardType, playerId
  BACK: 'back',

  // Required props: cardType, cardName, scale
  PREVIEW: 'preview',

  // Required props: cardType, playerId
  // Optional props: scale
  PLACEHOLDER: 'placeholder',
};

export const SHORT_INTERVAL = 1000;
export const MEDIUM_INTERVAL = 2000;

export const BASE_SCALE = 1;
export const MEDIUM_SCALE = 1.25;

export const CARD_HEIGHT = 210;
export const CARD_WIDTH = 150;

export const AVATAR_HEIGHT = 125;
export const AVATAR_WIDTH = 125;
