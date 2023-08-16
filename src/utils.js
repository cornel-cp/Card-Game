export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

export const getTarget = (currentPlayer, targetType) => {
  switch (targetType) {
    case "player":
      return currentPlayer;
    case "opponent":
      return currentPlayer === "0" ? "1" : "0";
    default:
      return null;
  }
};

export const hasEffect = (G, target, effectType) => {
  return G.players[target].effects.some((e) => e.type === effectType);
};

export const removeEffects = (G, target, effectType) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => e.type !== effectType
  );
};

export const filterEffectsByMatch = (G, target, effectTypeStr) => {
  G.players[target].effects = G.players[target].effects.filter((e) =>
    e.type.includes(effectTypeStr)
  );
};

export const removeEffectsByMatch = (G, target, effectTypeStr) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => !e.type.includes(effectTypeStr)
  );
};

export const undoEffect = (G, target, { type, value = 0 }) => {
  switch (type) {
    case "buffAtk":
      G.players[target].atk -= value;
      break;
    case "buffDef":
      G.players[target].def -= value;
      break;
    case "debuffAtk":
      G.players[target].atk += value;
      break;
    case "debuffDef":
      G.players[target].def += value;
      break;
    default:
      return;
  }
};
