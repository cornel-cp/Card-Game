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
  resurrect: 'resurrect',
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
  // Stackable positive effects applied to the player.
  buff: [
    EffectType.buffAtk,
    EffectType.buffDef,
    EffectType.doubleDmg,
    EffectType.preventDmg,
    EffectType.resurrect,
  ],

  // Stackable negative effects applied to the opponent.
  debuff: [EffectType.debuffAtk, EffectType.debuffDef],

  // Only one effect of the same type can exist at a time. Can be either buff or debuff.
  unique: [EffectType.doubleDmg, EffectType.preventDmg, EffectType.resurrect],
};

// Only enduring effects have text and group (buff/debuff) field for logging purpose

/**
 * Deal damage to the opponent by value.
 * Damage = (card damage + player attack - opponent defense), modifiers applied afterward.
 */
export const damage = (value) => {
  return {
    type: EffectType.damage,
    duration: EffectDuration.instant,
    target: EffectTarget.opponent,
    value,
  };
};

/**
 * Increase your HP by value.
 */
export const heal = (value) => {
  return {
    type: EffectType.heal,
    duration: EffectDuration.instant,
    target: EffectTarget.self,
    value,
  };
};

/**
 * Increase your attack by value.
 */
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

/**
 * Increase your defense by value.
 */
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

/**
 * Decrease the opponent's attack by value.
 */
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

/**
 * Decrease the opponent's defense by value.
 */
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

/**
 * Remove all your debuffs.
 */
export const removeDebuff = {
  type: EffectType.removeDebuff,
  duration: EffectDuration.instant,
  target: EffectTarget.self,
};

/**
 * Remove all the opponent's buffs.
 */
export const removeBuff = {
  type: EffectType.removeBuff,
  duration: EffectDuration.instant,
  target: EffectTarget.opponent,
};

/**
 * Double your next card damage.
 */
export const doubleDmg = {
  type: EffectType.doubleDmg,
  duration: EffectDuration.enduring,
  target: EffectTarget.self,
  group: EffectGroupName.buff,
  text: 'Next Damage x2',
};

/**
 * Prevent next card damage from the opponent.
 */
export const preventDmg = {
  type: EffectType.preventDmg,
  duration: EffectDuration.enduring,
  target: EffectTarget.self,
  group: EffectGroupName.buff,
  text: 'Prevent Next Damage',
};

/**
 * Before receiving fatal card damage from the opponent, prevent it and set your HP to 15.
 */
export const resurrect = (value) => {
  return {
    type: EffectType.resurrect,
    duration: EffectDuration.enduring,
    target: EffectTarget.self,
    value,
    group: EffectGroupName.buff,
    text: `+${value} HP on Death`,
  };
};
