const levelNames = {
  1: 'Royal City',
  2: 'Lava Plains',
  3: 'Ice Crown',
  4: 'Lost Desert',
  5: 'Misty Woods',
};
const getLevelName = (level = '1') => levelNames[level];

const enemyNames = {
  1: 'Wise Scholar',
  2: 'Wild Firemancer',
  3: 'Ice Queen',
  4: 'Traveling Merchant',
  5: 'Forest Ranger',
};
const getEnemyName = (level = '1') => enemyNames[level];

const battleStartCaptions = {
  1: 'Level 1: Royal City',
  2: 'Level 2: Lava Plains',
  3: 'Level 3: Ice Crown',
  4: 'Level 4: Lost Desert',
  5: 'Level 5: Misty Woods',
};
const getBattleStartCaption = (level = '1') => battleStartCaptions[level];

const battleStartInstrutions = {
  1: {
    intro: `Your journey as a budding wizard begins in the Royal City, where
      the Wise Scholar awaits to test your skill.`,
    levelRule: ``,
    outro: ``,
  },

  2: {
    intro: `You step into the Lava Plains, where you will face the Wild Firemancer's fiery wrath. `,
    levelRule: `You'll begin with random fire cards in your hand. `,
    outro: `Burn or be burned!`,
  },

  3: {
    intro: `On the Ice Crown, the Ice Queen commands the battlefield with her chilling power. `,
    levelRule: `Every damage has a chance to freeze your enemy (invalidate their next card).`,
    outro: ``,
  },

  4: {
    intro: `In the heart of the Lost Desert, you encounter the cunning Traveling Merchant. `,
    levelRule: `Disrupted by the desert wind, every attack has a chance to miss.`,
    outro: ``,
  },

  5: {
    intro: `Deep in the Misty Woods, the Forest Ranger stalks your every move. `,
    levelRule: `You’ll pick your card from two options to find your way through the forest.`,
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
