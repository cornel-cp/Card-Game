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
  resurrect,
  freeze,
  aura,
  replaceHand,
  swapHp,
  stealBuff,
  showEnemyHand,
  lifesteal,
} from './cardEffects';

/**
 * Defines keywords used by the frontend to execute logic based on card categories.
 */
export const CardKeyword = {
  // Cards that deal direct damage to your opponent
  damage: 'damage',

  // Cards that restore your HP
  heal: 'heal',

  // Cards that impact you or your opponent's active effects
  effect: 'effect',
};

// READ-ONLY CARDS
// Card name and text added here only for logging purpose

export const Fireball1 = {
  id: '0',
  name: 'Fireball',
  text: 'Damage 3',
  effects: [damage(3)],
  keywords: [CardKeyword.damage],
};

export const Fireball2 = {
  id: '1',
  name: 'Fireball+',
  text: 'Damage 5',
  effects: [damage(5)],
  keywords: [CardKeyword.damage],
};

export const Fireball3 = {
  id: '2',
  name: 'Fireball++',
  text: 'Damage 9',
  effects: [damage(9)],
  keywords: [CardKeyword.damage],
};

export const Frost1 = {
  id: '3',
  name: 'Frost',
  text: 'Damage 4',
  effects: [damage(4)],
  keywords: [CardKeyword.damage],
};

export const Frost2 = {
  id: '4',
  name: 'Frost+',
  text: 'Damage 6',
  effects: [damage(6)],
  keywords: [CardKeyword.damage],
};

export const Frost3 = {
  id: '5',
  name: 'Frost++',
  text: 'Damage 8',
  effects: [damage(8)],
  keywords: [CardKeyword.damage],
};

export const Thunder1 = {
  id: '6',
  name: 'Thunder',
  text: 'Damage 7',
  effects: [damage(7)],
  keywords: [CardKeyword.damage],
};

export const Thunder2 = {
  id: '7',
  name: 'Thunder+',
  text: 'Damage 12',
  effects: [damage(12)],
  keywords: [CardKeyword.damage],
};

export const Thunder3 = {
  id: '8',
  name: 'Thunder++',
  text: 'Damage 18',
  effects: [damage(18)],
  keywords: [CardKeyword.damage],
};

export const Heal1 = {
  id: '9',
  name: 'Heal',
  text: '+5 HP',
  effects: [heal(5)],
  keywords: [CardKeyword.heal],
};

export const Heal2 = {
  id: '10',
  name: 'Heal+',
  text: '+10 HP',
  effects: [heal(10)],
  keywords: [CardKeyword.heal],
};

export const Heal3 = {
  id: '11',
  name: 'Heal++',
  text: '+15 HP',
  effects: [heal(15)],
  keywords: [CardKeyword.heal],
};

export const Blessing = {
  id: '12',
  name: 'Blessing',
  text: '+3 Attack',
  effects: [buffAtk(3)],
  keywords: [CardKeyword.effect],
};

export const Armor = {
  id: '13',
  name: 'Armor',
  text: '+3 Shield',
  effects: [buffDef(3)],
  keywords: [CardKeyword.effect],
};

export const Weaken = {
  id: '14',
  name: 'Weaken',
  text: 'Enemy -3 Attack',
  effects: [debuffAtk(3)],
  keywords: [CardKeyword.effect],
};

export const Curse = {
  id: '15',
  name: 'Curse',
  text: 'Enemy -3 Shield',
  effects: [debuffDef(3)],
  keywords: [CardKeyword.effect],
};

export const Purify = {
  id: '16',
  name: 'Purify',
  text: 'Remove Debuff',
  effects: [removeDebuff],
  keywords: [CardKeyword.effect],
};

export const Dispel = {
  id: '17',
  name: 'Dispel',
  text: 'Remove Enemy Buff',
  effects: [removeBuff],
  keywords: [CardKeyword.effect],
};

export const Enrage = {
  id: '18',
  name: 'Enrage',
  text: 'Next Damage x2',
  effects: [doubleDmg],
  keywords: [CardKeyword.effect],
};

export const Block = {
  id: '19',
  name: 'Block',
  text: 'Prevent Next Damage',
  effects: [preventDmg],
  keywords: [CardKeyword.effect],
};

export const Flame = {
  id: '20',
  name: 'Flame',
  text: 'Damage 9 and +5 Attack',
  effects: [damage(9), buffAtk(5)],
  keywords: [CardKeyword.damage, CardKeyword.effect],
};

export const Resurrect = {
  id: '21',
  name: 'Resurrect',
  text: '+15 HP on Death',
  effects: [resurrect(15)],
  keywords: [CardKeyword.heal, CardKeyword.effect],
};

export const Petrify = {
  id: '22',
  name: 'Petrify',
  text: 'Freeze Enemy 1 Turn',
  effects: [freeze],
  keywords: [CardKeyword.effect],
};

export const Aura = {
  id: '23',
  name: 'Aura',
  text: '+3 HP per Turn',
  effects: [aura([heal(3)], '+3 HP per Turn')],
  keywords: [CardKeyword.heal, CardKeyword.effect],
};

export const Sandstorm = {
  id: '24',
  name: 'Sandstorm',
  text: 'Replace Hand',
  effects: [replaceHand],
  keywords: [],
};

export const Wish1 = {
  id: '25',
  name: 'Wish',
  text: 'Changes Effect Each Turn!',
  effects: [],
  keywords: [],
};

export const Wish2 = {
  id: '26',
  name: 'Wish',
  text: 'Remove Buff and Freeze 1 Turn',
  effects: [removeBuff, freeze],
  keywords: [CardKeyword.effect],
};

export const Wish3 = {
  id: '27',
  name: 'Wish',
  text: '+6 Attack',
  effects: [buffAtk(6)],
  keywords: [CardKeyword.effect],
};

export const Wish4 = {
  id: '28',
  name: 'Wish',
  text: 'Remove Debuff and +10 HP',
  effects: [removeDebuff, heal(10)],
  keywords: [CardKeyword.effect, CardKeyword.heal],
};

export const Wish5 = {
  id: '29',
  name: 'Wish',
  text: 'Damage 12',
  effects: [damage(12)],
  keywords: [CardKeyword.damage],
};

export const Mutate = {
  id: '30',
  name: 'Mutate',
  text: 'Swap HP',
  effects: [swapHp],
  keywords: [],
};

export const Ambush = {
  id: '31',
  name: 'Ambush',
  text: 'Steal 1 Buff',
  effects: [stealBuff],
  keywords: [CardKeyword.effect],
};

export const Vision = {
  id: '32',
  name: 'Vision',
  text: 'Show Enemy Hand',
  effects: [showEnemyHand],
  keywords: [],
};

export const Tide = {
  id: '33',
  name: 'Tide',
  text: 'Damage 16 and + Same HP',
  effects: [lifesteal(16)], 
  keywords: [CardKeyword.damage, CardKeyword.heal],
};
