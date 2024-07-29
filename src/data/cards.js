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

// Card name and text added here only for logging purpose

export const Fireball1 = {
  id: '0',
  name: 'Fireball',
  text: 'Damage 3',
  effects: [damage(3)],
};

export const Fireball2 = {
  id: '1',
  name: 'Fireball+',
  text: 'Damage 5',
  effects: [damage(5)],
};

export const Fireball3 = {
  id: '2',
  name: 'Fireball++',
  text: 'Damage 9',
  effects: [damage(9)],
};

export const Freeze1 = {
  id: '3',
  name: 'Freeze',
  text: 'Damage 4',
  effects: [damage(4)],
};

export const Freeze2 = {
  id: '4',
  name: 'Freeze+',
  text: 'Damage 6',
  effects: [damage(6)],
};

export const Freeze3 = {
  id: '5',
  name: 'Freeze++',
  text: 'Damage 8',
  effects: [damage(8)],
};

export const Thunder1 = {
  id: '6',
  name: 'Thunder',
  text: 'Damage 7',
  effects: [damage(7)],
};

export const Thunder2 = {
  id: '7',
  name: 'Thunder+',
  text: 'Damage 12',
  effects: [damage(12)],
};

export const Thunder3 = {
  id: '8',
  name: 'Thunder++',
  text: 'Damage 18',
  effects: [damage(18)],
};

export const Heal1 = {
  id: '9',
  name: 'Heal',
  text: '+5 HP',
  effects: [heal(5)],
};

export const Heal2 = {
  id: '10',
  name: 'Heal+',
  text: '+10 HP',
  effects: [heal(10)],
};

export const Heal3 = {
  id: '11',
  name: 'Heal++',
  text: '+15 HP',
  effects: [heal(15)],
};

export const Blessing = {
  id: '12',
  name: 'Blessing',
  text: '+3 Attack',
  effects: [buffAtk(3)],
};

export const Armor = {
  id: '13',
  name: 'Armor',
  text: '+3 Shield',
  effects: [buffDef(3)],
};

export const Weaken = {
  id: '14',
  name: 'Weaken',
  text: 'Enemy -3 Attack',
  effects: [debuffAtk(3)],
};

export const Curse = {
  id: '15',
  name: 'Curse',
  text: 'Enemy -3 Shield',
  effects: [debuffDef(3)],
};

export const Purify = {
  id: '16',
  name: 'Purify',
  text: 'Remove Debuff',
  effects: [removeDebuff],
};

export const Dispel = {
  id: '17',
  name: 'Dispel',
  text: 'Remove Enemy Buff',
  effects: [removeBuff],
};

export const Enrage = {
  id: '18',
  name: 'Enrage',
  text: 'Next Damage x2',
  effects: [doubleDmg],
};

export const Block = {
  id: '19',
  name: 'Block',
  text: 'Prevent Next Damage',
  effects: [preventDmg],
};
