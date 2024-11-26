import { Fireball1, Fireball2, Fireball3, Flame, Resurrect } from './cards';

const randomPopulateHand = (
  options = [Fireball1, Fireball2, Fireball3, Flame, Resurrect],
  probabilities = [0.2, 0.3, 0.4, 0.08, 0.02]
) => {
  if (options.length !== probabilities.length) {
    throw new Error('Options and probabilities must have the same length.');
  }

  // Sum up all probablilities
  const totalProbability = probabilities.reduce((sum, prob) => sum + prob, 0);

  // Normalize probabilities to 1 (if not already)
  const normalizedProbabilities = probabilities.map(
    (prob) => prob / totalProbability
  );

  const hand = Array.from({ length: 5 }, () => {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < options.length; i++) {
      cumulativeProbability += normalizedProbabilities[i];
      if (randomValue < cumulativeProbability) {
        return options[i];
      }
    }
  });

  return [...hand];
};

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
};

const finalLevel = '2';

export { levelConfigs, finalLevel };
