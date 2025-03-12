import {
  Fireball1,
  Fireball2,
  Fireball3,
  Frost1,
  Frost2,
  Frost3,
  Thunder1,
  Thunder2,
  Thunder3,
  Heal1,
  Heal2,
  Heal3,
  Blessing,
  Armor,
  Weaken,
  Curse,
  Purify,
  Dispel,
  Enrage,
  Block,
  Flame,
  Resurrect,
  Petrify,
  Aura,
  Sandstorm,
  Wish1,
  Mutate,
  Ambush,
  Vision,
  Tide,
  Revenge,
  Poison,
} from './cards';

const baseDeck = [
  Fireball1,
  Fireball2,
  Fireball3,
  Frost1,
  Frost2,
  Frost3,
  Thunder1,
  Thunder2,
  Thunder3,
  Heal1,
  Heal2,
  Heal3,
  Blessing,
  Armor,
  Weaken,
  Curse,
  Purify,
  Dispel,
  Enrage,
  Block,
];

const levelDecks = {
  1: [...baseDeck],

  2: [...baseDeck, Flame, Resurrect],

  3: [...baseDeck, Flame, Resurrect, Petrify, Aura],

  4: [...baseDeck, Flame, Resurrect, Petrify, Aura, Sandstorm, Wish1],

  5: [
    ...baseDeck,
    Flame,
    Resurrect,
    Petrify,
    Aura,
    Sandstorm,
    Wish1,
    Mutate,
    Ambush,
  ],

  6: [
    ...baseDeck,
    Flame,
    Resurrect,
    Petrify,
    Aura,
    Sandstorm,
    Wish1,
    Mutate,
    Ambush,
    Vision,
    Tide,
  ],

  7: [
    ...baseDeck,
    Flame,
    Resurrect,
    Petrify,
    Aura,
    Sandstorm,
    Wish1,
    Mutate,
    Ambush,
    Vision,
    Tide,
    Revenge,
    Poison,
  ],
};

export const getDeckForLevel = (level = '1') => {
  const levelDeck = levelDecks[level] || [];
  if (levelDeck.length < 10) {
    throw new Error('Deck array length is less than 10.'); // Dev testing issue only
  }
  return [...levelDeck];
};
