import {
  randomPopulateHand,
  generateAttackOutcomes,
  getClearEffectSchedule,
} from './levelUtils';
import {
  Fireball1,
  Fireball2,
  Fireball3,
  Flame,
  Resurrect,
} from '../data/cards';

// General constants
export const DrawMode = {
  draw: 'draw',
  select: 'select',
};
export const finalLevel = '7';
export const devTestLevel = '7';
export const maxTurn = 50;

// Level specific constants
export const handDistribution = [0.1, 0.4, 0.4, 0.05, 0.05]; // Level 2
export const freezeRate = 0.3; // Level 3
export const missRate = 0.25; // Level 4
export const clearEffectInterval = 11; // Level 6
export const loseHpAmount = 5; // Level 7

export const levelConfigs = {
  1: {
    playerStatsOverride: {},
    enemyStatsOverride: {},

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
    },
  },

  2: {
    playerStatsOverride: {
      maxHp: 50,
      hp: 50,
    },
    enemyStatsOverride: {
      maxHp: 50,
      hp: 50,
    },

    playerHandOverride: randomPopulateHand(
      [Fireball1, Fireball2, Fireball3, Flame, Resurrect],
      handDistribution
    ),
    enemyHandOverride: randomPopulateHand(
      [Fireball1, Fireball2, Fireball3, Flame, Resurrect],
      handDistribution
    ),

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
    },
  },

  3: {
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

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
    },
  },

  4: {
    playerStatsOverride: {
      maxHp: 60,
      hp: 60,
    },
    enemyStatsOverride: {
      maxHp: 60,
      hp: 60,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
      shouldMiss: generateAttackOutcomes(maxTurn, missRate),
    },
  },

  5: {
    playerStatsOverride: {
      maxHp: 65,
      hp: 65,
    },
    enemyStatsOverride: {
      maxHp: 65,
      hp: 65,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.select,
      showEnemyHand: false,
    },
  },

  6: {
    playerStatsOverride: {
      maxHp: 70,
      hp: 70,
    },
    enemyStatsOverride: {
      maxHp: 70,
      hp: 70,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
      shouldClearEffects: getClearEffectSchedule(maxTurn, clearEffectInterval),
    },
  },

  7: {
    playerStatsOverride: {
      maxHp: 75,
      hp: 75,
    },
    enemyStatsOverride: {
      maxHp: 75,
      hp: 75,
    },

    playerHandOverride: [],
    enemyHandOverride: [],

    playerEffectsOverride: [],
    enemyEffectsOverride: [],

    globalEffects: {
      drawMode: DrawMode.draw,
      showEnemyHand: false,
      loseHpAmount,
    },
  },
};
