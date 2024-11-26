import {
  getTarget,
  hasEffect,
  removeEffects,
  selectEffectsByGroup,
  removeEffectsByGroup,
  undoEffect,
} from './effectUtils';
import {
  EffectType,
  EffectDuration,
  EffectGroupName,
  EffectGroup,
} from '../data/cardEffects';

const damage = (G, target, { value = 0 }) => {
  const player = target === '0' ? '1' : '0';

  value = value + G.players[player].atk - G.players[target].def;

  if (hasEffect(G, player, EffectType.doubleDmg)) {
    value *= 2;
  }
  removeEffects(G, player, EffectType.doubleDmg);

  if (hasEffect(G, target, EffectType.preventDmg)) {
    value = 0;
  }
  removeEffects(G, target, EffectType.preventDmg);

  value = Math.max(value, 0);

  if (
    G.players[target].hp <= value &&
    hasEffect(G, target, EffectType.resurrect)
  ) {
    G.players[target].hp = 15;
    removeEffects(G, target, EffectType.resurrect);
    return;
  }

  G.players[target].hp -= value;
};

const heal = (G, target, { value = 0 }) => {
  G.players[target].hp += value;

  G.players[target].hp = Math.min(
    G.players[target].hp,
    G.players[target].maxHp
  );
};

const buffAtk = (G, target, { value = 0 }) => {
  G.players[target].atk += value;
};

const buffDef = (G, target, { value = 0 }) => {
  G.players[target].def += value;
};

const debuffAtk = (G, target, { value = 0 }) => {
  G.players[target].atk -= value;
};

const debuffDef = (G, target, { value = 0 }) => {
  G.players[target].def -= value;
};

const removeDebuff = (G, target) => {
  const debuffs = selectEffectsByGroup(G, target, EffectGroupName.debuff);

  if (!debuffs || debuffs.length === 0) return;

  debuffs.forEach((e) => {
    undoEffect(G, target, e);
  });

  removeEffectsByGroup(G, target, EffectGroupName.debuff);
};

const removeBuff = (G, target) => {
  const buffs = selectEffectsByGroup(G, target, EffectGroupName.buff);

  if (!buffs || buffs.length === 0) return;

  buffs.forEach((e) => {
    undoEffect(G, target, e);
  });

  removeEffectsByGroup(G, target, EffectGroupName.buff);
};

const doubleDmg = () => {};

const preventDmg = () => {};

const resurrect = () => {};

const effectHandlers = {
  [EffectType.damage]: damage,
  [EffectType.heal]: heal,
  [EffectType.buffAtk]: buffAtk,
  [EffectType.buffDef]: buffDef,
  [EffectType.debuffAtk]: debuffAtk,
  [EffectType.debuffDef]: debuffDef,
  [EffectType.removeDebuff]: removeDebuff,
  [EffectType.removeBuff]: removeBuff,
  [EffectType.doubleDmg]: doubleDmg,
  [EffectType.preventDmg]: preventDmg,
  [EffectType.resurrect]: resurrect,
};

export const applyEffect = (G, ctx, effect) => {
  const handler = effectHandlers[effect.type];

  if (!handler) {
    console.error(`Invalid effect type: ${effect.type}`);
    return;
  }

  const target = getTarget(ctx.currentPlayer, effect.target);

  if (
    EffectGroup.unique.some((e) => e === effect.type) &&
    hasEffect(G, target, effect.type)
  ) {
    return;
  }

  handler(G, target, effect);

  if (effect.duration === EffectDuration.enduring) {
    G.players[target].effects.push(effect);
  }
};
