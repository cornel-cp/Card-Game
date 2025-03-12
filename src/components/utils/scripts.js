const levelNames = {
  1: 'Royal City',
  2: 'Lava Plains',
  3: 'Ice Crown',
  4: 'Lost Desert',
  5: 'Misty Woods',
  6: 'Coral Bay',
  7: 'Shadow Swamp',
};
const getLevelName = (level = '1') => levelNames[level];

const enemyNames = {
  1: 'Wise Scholar',
  2: 'Wild Firemancer',
  3: 'Ice Queen',
  4: 'Traveling Merchant',
  5: 'Forest Ranger',
  6: 'Murloc Oracle',
  7: 'Crimson Witch',
};
const getEnemyName = (level = '1') => enemyNames[level];

const battleStartCaptions = {
  1: 'Level 1: Royal City',
  2: 'Level 2: Lava Plains',
  3: 'Level 3: Ice Crown',
  4: 'Level 4: Lost Desert',
  5: 'Level 5: Misty Woods',
  6: 'Level 6: Coral Bay',
  7: 'Level 7: Shadow Swamp',
};
const getBattleStartCaption = (level = '1') => battleStartCaptions[level];

const battleStartInstrutions = {
  1: {
    intro: `Your journey as a budding wizard begins in Royal City, where the Wise Scholar awaits to test your skill.`,
    levelRule: ``,
    outro: ``,
  },

  2: {
    intro: `You step into Lava Plains, where you will face the Wild Firemancer's fiery wrath. `,
    levelRule: `You'll begin with random copies of fire cards in your hand. `,
    outro: `Burn or be burned!`,
  },

  3: {
    intro: `On Ice Crown, the Ice Queen commands the battlefield with her chilling power. `,
    levelRule: `Every damage has a chance to freeze your enemy (invalidate their next card).`,
    outro: ``,
  },

  4: {
    intro: `In the heart of Lost Desert, you encounter the crafty Traveling Merchant. `,
    levelRule: `Disrupted by the desert wind, every attack has a chance to miss.`,
    outro: ``,
  },

  5: {
    intro: `Deep in Misty Woods, the Forest Ranger tracks your every step. `,
    levelRule: `Every turn, you’ll pick between two cards to find your way.`,
    outro: ``,
  },

  6: {
    intro: `Beneath the shimmering waves of Coral Bay, the tides shift in unpredictable ways. `,
    levelRule: `Every 10 turns, all buffs and debuffs are washed away.`,
    outro: ``,
  },

  7: {
    intro: `The cursed Shadow Swamp stands in your way before the final trial. `,
    levelRule: `Both players lose 3 HP at the end of their turn (it can't drop below 1).`,
    outro: ``,
  },
};
const getBattleStartInstructions = (level = '1') =>
  battleStartInstrutions[level];

export {
  getLevelName,
  getEnemyName,
  getBattleStartCaption,
  getBattleStartInstructions,
};
