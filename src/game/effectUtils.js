import { EffectType, EffectTarget, EffectGroup } from '../data/cardEffects';

/**
 * Returns the target player id of the card.
 */
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

/**
 * Checks if a specific effect type exists on the target player.
 */
export const hasEffect = (G, target, effectType) => {
  return G.players[target].effects.some((e) => e.type === effectType);
};

/**
 * Checks if the target player has the *exact same* effect as the given one.
 */
export const hasSameEffect = (G, target, effect) => {
  return G.players[target].effects.some(
    (e) => JSON.stringify(e) === JSON.stringify(effect)
  );
};

/**
 * Returns all active effects of a specific type for the target player.
 */
export const getEffects = (G, target, effectType) => {
  return G.players[target].effects.filter((e) => e.type === effectType);
};

/**
 * Removes all effects of a specific type from the target player.
 */
export const removeEffects = (G, target, effectType) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => e.type !== effectType
  );
};

/**
 * Selects effects of a specific group type for the target player.
 */
export const selectEffectsByGroup = (G, target, groupType) => {
  return G.players[target].effects.filter((e) =>
    EffectGroup[groupType].includes(e.type)
  );
};

/**
 * Removes all effects belonging to a specific group type from the target player.
 */
export const removeEffectsByGroup = (G, target, groupType) => {
  G.players[target].effects = G.players[target].effects.filter(
    (e) => !EffectGroup[groupType].includes(e.type)
  );
};

/**
 * Reverses the specified effect on the target player, such as stats changes.
 * - This method only applies on enduring effects.
 * - This method is *not* removing the effect names from player arrays, for that use `removeEffects` instead.
 * - If there is no applicable effect to reverse (other than removal from the array), this method has no impact.
 */
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
    case EffectType.doubleDmg:
      break;
    case EffectType.preventDmg:
      break;
    case EffectType.resurrect:
      break;
    case EffectType.freeze:
      break;
    case EffectType.aura:
      break;
    default:
      console.error(`Invalid effect type: ${type}`);
      return;
  }
};

/**
 * Evaluates whether an effect should be executed based on a given probability.
 */
export const getChanceEffect = (chance) => {
  return Math.random() < chance;
};
