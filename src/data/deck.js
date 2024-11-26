import {
  Fireball1,
  Fireball2,
  Fireball3,
  Freeze1,
  Freeze2,
  Freeze3,
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
} from './cards';

const baseDeck = [
  Fireball1,
  Fireball1,

  Fireball2,
  Fireball2,

  Fireball3,
  Fireball3,

  Freeze1,
  Freeze1,

  Freeze2,
  Freeze2,

  Freeze3,
  Freeze3,

  Thunder1,
  Thunder1,

  Thunder2,
  Thunder2,

  Thunder3,
  Thunder3,

  Heal1,
  Heal1,

  Heal2,
  Heal2,

  Heal3,
  Heal3,

  Blessing,
  Blessing,

  Armor,
  Armor,

  Weaken,
  Weaken,

  Curse,
  Curse,

  Purify,
  Purify,

  Dispel,
  Dispel,

  Enrage,
  Enrage,

  Block,
  Block,
];

const levelDecks = {
  1: [...baseDeck],

  2: [...baseDeck, Flame, Flame, Resurrect, Resurrect],
};

export const getDeckForLevel = (level = '1') => {
  const levelDeck = levelDecks[level] || [];
  if (levelDeck.length < 10) {
    throw new Error("Deck array length is less than 10.");
  }
  return [...levelDeck];
};
