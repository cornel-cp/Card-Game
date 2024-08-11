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
  unique: 'unique',
};

export const EffectGroup = {
  buff: [
    EffectType.buffAtk,
    EffectType.buffDef,
    EffectType.doubleDmg,
    EffectType.preventDmg,
  ],

  debuff: [EffectType.debuffAtk, EffectType.debuffDef],

  unique: [EffectType.doubleDmg, EffectType.preventDmg],
};

// ADD EFFECTS HERE
// Only enduring effects have text and group (buff/debuff) field for logging purpose

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
    group: EffectGroupName.buff,
    text: `+${value} Attack`,
  };
};

export const buffDef = (value) => {
  return {
    type: EffectType.buffDef,
    duration: EffectDuration.enduring,
    target: EffectTarget.self,
    value,
    group: EffectGroupName.buff,
    text: `+${value} Shield`,
  };
};

export const debuffAtk = (value) => {
  return {
    type: EffectType.debuffAtk,
    duration: EffectDuration.enduring,
    target: EffectTarget.opponent,
    value,
    group: EffectGroupName.debuff,
    text: `-${value} Attack`,
  };
};

export const debuffDef = (value) => {
  return {
    type: EffectType.debuffDef,
    duration: EffectDuration.enduring,
    target: EffectTarget.opponent,
    value,
    group: EffectGroupName.debuff,
    text: `-${value} Shield`,
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
  group: EffectGroupName.buff,
  text: 'Next Damage x2',
};

export const preventDmg = {
  type: EffectType.preventDmg,
  duration: EffectDuration.enduring,
  target: EffectTarget.self,
  group: EffectGroupName.buff,
  text: 'Prevent Next Damage',
};
