export const GameState = {
  // State during a player's turn after drawing a card but before clicking a card for preview.
  // The end turn button is labeled as player's turn and is disabled.
  endTurnDisabled: 'end turn disabled',

  // State during a player's turn after previewing a card but before ending the turn.
  // The end turn button is labeled as player's turn and is clickable.
  endTurnEnabled: 'end turn enabled',

  // State after the player ends their turn but before drawing a card finishes in the player's next turn.
  // The end turn button is labeled as AI's turn and is disabled.
  aiTurn: 'ai turn',
};

export const CardType = {
  // Required props: cardType, cardId, cardIndex, handleCardClick
  front: 'front',

  // Required props: cardType, playerId
  back: 'back',

  // Required props: cardType, cardId, scale
  preview: 'preview',

  // Required props: cardType, playerId
  // Optional props: scale
  placeholder: 'placeholder',
};

// Animation target is separated from effect target, as animation is applied per card but a card can have multiple effects.
// This enum can also be reused for level or game animations.
export const AnimationTarget = {
  enemy: 'enemy',
  self: 'self',
  both: 'both',
  none: 'none',
};

export const pauseInterval = 1200;

export const cardHeight = 210;
export const cardWidth = 150;
export const cardSmallScale = 0.9;
export const cardMediumScale = 1.25;

export const avatarHeight = 125;
export const avatarWidth = 125;
export const avatarSmallScale = 0.9;
export const avatarMediumScale = 1.1;
