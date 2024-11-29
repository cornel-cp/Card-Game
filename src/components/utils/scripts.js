const levelNames = {
  1: 'Royal City',
  2: 'Lava Plains',
  3: 'Ice Crown',
};
const getLevelName = (level = '1') => levelNames[level];

const enemyNames = {
  1: 'Wise Scholar',
  2: 'Wild Firemancer',
  3: 'Ice Queen',
};
const getEnemyName = (level = '1') => enemyNames[level];

const battleStartCaptions = {
  1: 'Level 1: Royal City',
  2: 'Level 2: Lava Plains',
  3: 'Level 3: Ice Crown',
};
const getBattleStartCaption = (level = '1') => battleStartCaptions[level];

const battleStartInstrutions = {
  1: {
    intro: `Your journey as a budding wizard begins in the grand Royal City, where
      the Wise Scholar awaits to test your skill.`,
    levelRule: ``,
    outro: ``,
  },

  2: {
    intro: `You step into the blazing Lava Plains, where you will face the 
      Wild Firemancer's fiery wrath. `,
    levelRule: `You'll begin with random fire cards in your hand. `,
    outro: `Burn or be burned!`,
  },

  3: {
    intro: `On the frozen crest of Ice Crown, the Ice Queen commands the battlefield with 
    her chilling power. `,
    levelRule: `Every damage has a chance to freeze your enemy (invalidate their next card).`,
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
