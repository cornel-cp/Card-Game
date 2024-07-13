import {
  getTarget,
  hasEffect,
  removeEffects,
  selectEffectsByGroup,
  removeEffectsByGroup,
  undoEffect,
} from './effectUtils';

const damage = (G, target, { value = 0 }) => {
  const player = target === '0' ? '1' : '0';

  value = value + G.players[player].atk - G.players[target].def;

  if (hasEffect(G, player, 'doubleDmg')) {
    value *= 2;
  }
  removeEffects(G, player, 'doubleDmg');

  if (hasEffect(G, target, 'preventDmg')) {
    value = 0;
  }
  removeEffects(G, target, 'preventDmg');

  value = Math.max(value, 0);

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
  const debuffs = selectEffectsByGroup(G, target, 'debuff');

  if (!debuffs || debuffs.length === 0) return;

  debuffs.forEach((e) => {
    undoEffect(G, target, e);
  });

  removeEffectsByGroup(G, target, 'debuff');
};

const removeBuff = (G, target) => {
  const buffs = selectEffectsByGroup(G, target, 'buff');

  if (!buffs || buffs.length === 0) return;

  buffs.forEach((e) => {
    undoEffect(G, target, e);
  });

  removeEffectsByGroup(G, target, 'buff');
};

const doubleDmg = () => {};

const preventDmg = () => {};

const effectHandlers = {
  damage,
  heal,
  buffAtk,
  buffDef,
  debuffAtk,
  debuffDef,
  removeDebuff,
  removeBuff,
  doubleDmg,
  preventDmg,
};

export const applyEffect = (G, ctx, effect) => {
  const handler = effectHandlers[effect.type];

  if (!handler) {
    console.error(`Invalid effect type: ${effect.type}`);
    return;
  }

  const target = getTarget(ctx.currentPlayer, effect.target);

  handler(G, target, effect);

  if (effect.duration === 'enduring') {
    G.players[target].effects.push(effect);
  }
};
