export const EffectType = {
  damage: 'damage',
  heal: 'heal',
  buffAtk: 'buffAtk',
  buffDef: 'buffDef',
  debuffAtk: 'debuffAtk',
  debuffDef: 'debuffDef',
  removeBuff: 'removeBuff',
  removeDebuff: 'removeDebuff',
  doubleDmg: 'doubleDmg',
  preventDmg: 'preventDmg',
};

export const EffectDuration = {
  instant: 'instant',
  enduring: 'enduring',
};

export const EffectTarget = {
  self: 'self',
  opponent: 'opponent',
};

export const EffectGroupName = {
  buff: 'buff',
  debuff: 'debuff',
};

export const EffectGroup = {
  buff: [EffectType.buffAtk, EffectType.buffDef],

  debuff: [EffectType.debuffAtk, EffectType.debuffDef],
};

export const damage = (value) => {
  return {
    type: EffectType.damage,
    duration: EffectDuration.instant,
    target: EffectTarget.opponent,
    value,
  };
};

export const heal = (value) => {
  return {
    type: EffectType.heal,
    duration: EffectDuration.instant,
    target: EffectTarget.self,
    value,
  };
};

export const buffAtk = (value) => {
  return {
    type: EffectType.buffAtk,
    duration: EffectDuration.enduring,
    target: EffectTarget.self,
    value,
  };
};

export const buffDef = (value) => {
  return {
    type: EffectType.buffDef,
    duration: EffectDuration.enduring,
    target: EffectTarget.self,
    value,
  };
};

export const debuffAtk = (value) => {
  return {
    type: EffectType.debuffAtk,
    duration: EffectDuration.enduring,
    target: EffectTarget.opponent,
    value,
  };
};

export const debuffDef = (value) => {
  return {
    type: EffectType.debuffDef,
    duration: EffectDuration.enduring,
    target: EffectTarget.opponent,
    value,
  };
};

export const removeDebuff = {
  type: EffectType.removeDebuff,
  duration: EffectDuration.instant,
  target: EffectTarget.self,
};

export const removeBuff = {
  type: EffectType.removeBuff,
  duration: EffectDuration.instant,
  target: EffectTarget.opponent,
};

export const doubleDmg = {
  type: EffectType.doubleDmg,
  duration: EffectDuration.enduring,
  target: EffectTarget.self,
};

export const preventDmg = {
  type: EffectType.preventDmg,
  duration: EffectDuration.enduring,
  target: EffectTarget.self,
};
