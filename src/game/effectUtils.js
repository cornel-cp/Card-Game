import { EffectType, EffectTarget, EffectGroup } from '../data/cardEffects';

export const getTarget = (currentPlayer, targetType) => {
  switch (targetType) {
    case EffectTarget.self:
      return currentPlayer;
    case EffectTarget.opponent:
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

export const selectEffectsByGroup = (G, target, groupType) => {
  return G.players[target].effects.filter((e) =>
    EffectGroup[groupType].includes(e.type)
  );
};

export const removeEffectsByGroup = (G, target, groupType) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => !EffectGroup[groupType].includes(e.type)
  );
};

export const undoEffect = (G, target, { type, value = 0 }) => {
  switch (type) {
    case EffectType.buffAtk:
      G.players[target].atk -= value;
      break;
    case EffectType.buffDef:
      G.players[target].def -= value;
      break;
    case EffectType.debuffAtk:
      G.players[target].atk += value;
      break;
    case EffectType.debuffDef:
      G.players[target].def += value;
      break;
    default:
      console.error(`Invalid effect type: ${type}`);
      return;
  }
};
