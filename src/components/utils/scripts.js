import { PowerClass, GameMode } from '../../game/power';

const enemyNames = {
  1: 'Arden the Wise',
  2: 'G0B1N-X',
  3: 'Queen Shiro',
  4: 'Hassan Sarbah',
  5: 'Kai Stormbow',
  6: 'Mystfin',
  7: 'Zara Shadowbane',
  8: 'Nedra the Fallen',
};
const getEnemyName = (level = '1') => enemyNames[level];

const battleStartCaptions = {
  1: 'Level 1: The Citadel',
  2: 'Level 2: Kilaura Volcano',
  3: 'Level 3: Mount Everfrost',
  4: 'Level 4: Desert Xibalda',
  5: 'Level 5: Whisperwood',
  6: 'Level 6: Coral Bay',
  7: 'Level 7: Shadowland',
  8: 'Level 8: Bloodmoon Castle',
};
const getBattleStartCaption = (level = '1') => battleStartCaptions[level];

const battleInstrutions = {
  1: {
    intro: `You are a young wizard on a quest to challenge the greatest sorcerers. Your adventure begins at the Citadel to face Arden the Wise.`,
    levelRule: ``,
    outro: ``,
    tips: ``,
  },

  2: {
    intro: `G0B1N-X is a mischievous goblin mage who LOVES playing with fire. `,
    levelRule: `Both players get random copies of fire cards in their starting hand.`,
    outro: ``,
    tips: ``,
  },

  3: {
    intro: `Mount Everfrost is shrouded in an eternal winter caused by Queen Shiro's frost magic. `,
    levelRule: `Damage cards may freeze the target (invalidate their next card).`,
    outro: ``,
    tips: ``,
  },

  4: {
    intro: `In the heart of Xibalda, you meet Hassan Sarbah, master of ancient sand spells. Disrupted by the desert wind, `,
    levelRule: `attacks will miss on certain turns.`,
    outro: ``,
    tips: `Red turn number means your attack will miss!`,
  },

  5: {
    intro: `Kai, a seasoned hunter, is one with the secrets of Whisperwood. `,
    levelRule: `Every turn, you’ll pick between two cards `,
    outro: `to find your way through the forest.`,
    tips: ``,
  },

  6: {
    intro: `Beneath the shimmering waves of Coral Bay, the tides shift in unpredictable ways. `,
    levelRule: `Every 11 turns, all buffs and debuffs are washed away.`,
    outro: ``,
    tips: `Red turn number means effects will clear this turn!`,
  },

  7: {
    intro: `Zara Shadowbane rules the cursed Shadowland, draining the life of all who enter. `,
    levelRule: `Non-damage cards cost 5 HP to play. HP can't drop below 1.`,
    outro: ``,
    tips: ``,
  },

  8: {
    intro: `Nedra plots to corrupt the world with dark magic. Defeat him in the final duel to save the world! `,
    levelRule: ``,
    outro: ``,
    tips: ``,
  },
};
const getBattleInstructions = (level = '1') => battleInstrutions[level];

const powers = [
  {
    level: '2',
    name: 'Pyro',
    class: PowerClass.pyro,
    ruleText: {
      [GameMode.normal]:
        'you get a new fire hand at the end of your turns, but you lose after 40 turns.',
      [GameMode.hard]:
        'you get a new fire hand at the end of your turns, but you lose after 30 turns.',
    },
  },

  {
    level: '3',
    name: 'Cryo',
    class: PowerClass.cryo,
    ruleText: {
      [GameMode.normal]:
        "your attacks may freeze enemy, but you can't heal. Extra damage cards are added to the deck.",
      [GameMode.hard]: "your attacks may freeze enemy, but you can't heal.",
    },
  },

  {
    level: '4',
    name: 'Psammo',
    class: PowerClass.psammo,
    ruleText: {
      [GameMode.normal]:
        'your cards may turn into wishes at the start of your turns, but your attacks occasionally miss.',
      [GameMode.hard]:
        'your cards may turn into wishes at the start of your turns, but your attacks have a moderate chance to miss.',
    },
  },

  {
    level: '5',
    name: 'Dentro',
    class: PowerClass.dentro,
    ruleText: {
      [GameMode.normal]:
        'you pick a card instead of drawing, but enemy starts with 20 more HP.',
      [GameMode.hard]:
        'you pick a card instead of drawing, but enemy starts with 40 more HP.',
    },
  },

  {
    level: '6',
    name: 'Hydro',
    class: PowerClass.hydro,
    ruleText: {
      [GameMode.normal]:
        'you may gain a random buff at the end of your turns, but enemy has +3 Attack/+3 Shield permanently.',
      [GameMode.hard]:
        'you may gain a random buff at the end of your turns, but enemy has +6 Attack/+6 Shield permanently.',
    },
  },

  {
    level: '7',
    name: 'Erebo',
    class: PowerClass.erebo,
    ruleText: {
      [GameMode.normal]:
        'your damage cards reduce Max HP, but you start with 45 HP. HP swap is disabled.',
      [GameMode.hard]:
        'your damage cards reduce Max HP, but you start with 35 HP. HP swap is disabled.',
    },
  },
];

const getRuleByPower = () => {
  const power = powers.find(
    (power) => power.class === sessionStorage.getItem('power')
  );
  const mode = sessionStorage.getItem('mode') || GameMode.normal;
  return power
    ? {
        intro: `Embraced by the ${power.name} power, `,
        rule: `${power.ruleText[mode]}`,
      }
    : ``;
};

export {
  getEnemyName,
  getBattleStartCaption,
  getBattleInstructions,
  powers,
  getRuleByPower,
};
