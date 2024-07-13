import {
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
} from './cardEffects';

export const Fireball1 = {
  id: '0',
  effects: [damage(3)],
};

export const Fireball2 = {
  id: '1',
  effects: [damage(5)],
};

export const Fireball3 = {
  id: '2',
  effects: [damage(9)],
};

export const Freeze1 = {
  id: '3',
  effects: [damage(4)],
};

export const Freeze2 = {
  id: '4',
  effects: [damage(6)],
};

export const Freeze3 = {
  id: '5',
  effects: [damage(8)],
};

export const Thunder1 = {
  id: '6',
  effects: [damage(7)],
};

export const Thunder2 = {
  id: '7',
  effects: [damage(12)],
};

export const Thunder3 = {
  id: '8',
  effects: [damage(18)],
};

export const Heal1 = {
  id: '9',
  effects: [heal(5)],
};

export const Heal2 = {
  id: '10',
  effects: [heal(10)],
};

export const Heal3 = {
  id: '11',
  effects: [heal(15)],
};

export const Blessing = {
  id: '12',
  effects: [buffAtk(3)],
};

export const Armor = {
  id: '13',
  effects: [buffDef(3)],
};

export const Weaken = {
  id: '14',
  effects: [debuffAtk(3)],
};

export const Curse = {
  id: '15',
  effects: [debuffDef(3)],
};

export const Purify = {
  id: '16',
  effects: [removeDebuff],
};

export const Dispel = {
  id: '17',
  effects: [removeBuff],
};

export const Berserker = {
  id: '18',
  effects: [doubleDmg],
};

export const Block = {
  id: '19',
  effects: [preventDmg],
};
