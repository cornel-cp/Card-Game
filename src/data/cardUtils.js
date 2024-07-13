const effectType = {
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

const effectDuration = {
  instant: 'instant',
  enduring: 'enduring',
};

const effectTarget = {
  self: 'self',
  opponent: 'opponent',
};

const damage = (value) => {
  return {
    type: effectType.damage,
    duration: effectDuration.instant,
    target: effectTarget.opponent,
    value,
  };
};

const heal = (value) => {
  return {
    type: effectType.heal,
    duration: effectDuration.instant,
    target: effectTarget.self,
    value,
  };
};

const buffAtk = (value) => {
  return {
    type: effectType.buffAtk,
    duration: effectDuration.enduring,
    target: effectTarget.self,
    value,
  };
};

const buffDef = (value) => {
  return {
    type: effectType.buffDef,
    duration: effectDuration.enduring,
    target: effectTarget.self,
    value,
  };
};

const debuffAtk = (value) => {
  return {
    type: effectType.debuffAtk,
    duration: effectDuration.enduring,
    target: effectTarget.opponent,
    value,
  };
};

const debuffDef = (value) => {
  return {
    type: effectType.debuffDef,
    duration: effectDuration.enduring,
    target: effectTarget.opponent,
    value,
  };
};

const removeDebuff = {
  type: effectType.removeDebuff,
  duration: effectDuration.instant,
  target: effectTarget.self,
};

const removeBuff = {
  type: effectType.removeBuff,
  duration: effectDuration.instant,
  target: effectTarget.opponent,
};

const doubleDmg = {
  type: effectType.doubleDmg,
  duration: effectDuration.enduring,
  target: effectTarget.self,
};

const preventDmg = {
  type: effectType.preventDmg,
  duration: effectDuration.enduring,
  target: effectTarget.self,
};

export {
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
