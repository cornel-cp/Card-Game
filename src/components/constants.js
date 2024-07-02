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
