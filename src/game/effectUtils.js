export const getTarget = (currentPlayer, targetType) => {
  switch (targetType) {
    case 'self':
      return currentPlayer;
    case 'opponent':
      return currentPlayer === '0' ? '1' : '0';
    default:
      console.error(`Invalid target type: ${targetType}`);
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

const effectGroups = {
  buff: ['buffAtk', 'buffDef'],

  debuff: ['debuffAtk', 'debuffDef'],
};

export const selectEffectsByGroup = (G, target, groupType) => {
  return G.players[target].effects.filter((e) =>
    effectGroups[groupType].includes(e.type)
  );
};

export const removeEffectsByGroup = (G, target, groupType) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => !effectGroups[groupType].includes(e.type)
  );
};

export const undoEffect = (G, target, { type, value = 0 }) => {
  switch (type) {
    case 'buffAtk':
      G.players[target].atk -= value;
      break;
    case 'buffDef':
      G.players[target].def -= value;
      break;
    case 'debuffAtk':
      G.players[target].atk += value;
      break;
    case 'debuffDef':
      G.players[target].def += value;
      break;
    default:
      console.error(`Invalid effect type: ${type}`);
      return;
  }
};
