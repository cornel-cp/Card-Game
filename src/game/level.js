import { randomPopulateHand, generateAttackOutcomes } from './levelUtils';

const levelConfigs = {
  1: {
    playerStatsOverride: {},
    enemyStatsOverride: {},

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffectsOverride: [],
  },

  2: {
    playerStatsOverride: {
      maxHp: 45,
      hp: 45,
    },
    enemyStatsOverride: {
      maxHp: 45,
      hp: 45,
    },

    playerHandOverride: randomPopulateHand(),
    enemyHandOverride: randomPopulateHand(),

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffectsOverride: [],
  },

  3: {
    playerStatsOverride: {
      maxHp: 50,
      hp: 50,
    },
    enemyStatsOverride: {
      maxHp: 50,
      hp: 50,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffectsOverride: [],
  },

  4: {
    playerStatsOverride: {
      maxHp: 55,
      hp: 55,
    },
    enemyStatsOverride: {
      maxHp: 55,
      hp: 55,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffectsOverride: [
      {
        shouldMiss: generateAttackOutcomes(),
      },
    ],
  },
};

const finalLevel = '4';

export { levelConfigs, finalLevel };
