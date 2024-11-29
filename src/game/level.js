import { randomPopulateHand } from './levelUtils';

const levelConfigs = {
  1: {
    playerStatsOverride: {},
    enemyStatsOverride: {},

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],
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
  },
};

const finalLevel = '3';

export { levelConfigs, finalLevel };
