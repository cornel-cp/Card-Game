import { randomPopulateHand, generateAttackOutcomes } from './levelUtils';

export const DrawMode = {
  draw: 'draw',
  select: 'select',
};

export const finalLevel = '5';

export const maxTurn = 50;

export const levelConfigs = {
  1: {
    playerStatsOverride: {},
    enemyStatsOverride: {},

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: [
      {
        drawMode: DrawMode.draw,
      },
    ],
  },

  2: {
    playerStatsOverride: {
      maxHp: 35,
      hp: 35,
    },
    enemyStatsOverride: {
      maxHp: 35,
      hp: 35,
    },

    playerHandOverride: randomPopulateHand(),
    enemyHandOverride: randomPopulateHand(),

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: [
      {
        drawMode: DrawMode.draw,
      },
    ],
  },

  3: {
    playerStatsOverride: {
      maxHp: 40,
      hp: 40,
    },
    enemyStatsOverride: {
      maxHp: 40,
      hp: 40,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: [
      {
        drawMode: DrawMode.draw,
      },
    ],
  },

  4: {
    playerStatsOverride: {
      maxHp: 45,
      hp: 45,
    },
    enemyStatsOverride: {
      maxHp: 45,
      hp: 45,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: [
      {
        drawMode: DrawMode.draw,
      },
      {
        shouldMiss: generateAttackOutcomes(),
      },
    ],
  },

  5: {
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

    globalEffects: [
      {
        drawMode: DrawMode.select,
      },
    ],
  },
};
