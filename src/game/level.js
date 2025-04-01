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
import { PowerClass, getPowerConfigs } from './power';

// General constants
export const DrawMode = {
  draw: 'draw',
  select: 'select',
};
export const finalLevel = '8';
export const preFinalLevel = '7';
export const maxTurn =
  sessionStorage.getItem('power') === PowerClass.pyro
    ? getPowerConfigs().pyroMaxTurn // Pyro debuff
    : 50;

// Level specific constants
const fireHandDistribution = [0.2, 0.3, 0.4, 0.09, 0.01]; // Level 2
export const levelFreezeRate = 0.3; // Level 3
const missRate = 0.25; // Level 4
const clearEffectInterval = 11; // Level 6
const loseHpAmount = 5; // Level 7

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
      fireHandDistribution,
      5
    ),
    enemyHandOverride: randomPopulateHand(
      [Fireball1, Fireball2, Fireball3, Flame, Resurrect],
      fireHandDistribution,
      5
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

  8: {
    playerStatsOverride: {
      maxHp: 80,
      hp: 80,
    },
    enemyStatsOverride: {
      maxHp: 80,
      hp: 80,
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
};
