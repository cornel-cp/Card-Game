import {
  Fireball1,
  Fireball2,
  Fireball3,
  Flame,
  Resurrect,
} from '../data/cards';

/**
 * Randomly populate a player's starting hand with cards from a list of options and probabilities.
 */
export const randomPopulateHand = (
  options = [Fireball1, Fireball2, Fireball3, Flame, Resurrect],
  probabilities = [0.3, 0.3, 0.3, 0.08, 0.02]
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

    return options[0]; // Fallback logic, will never reach this line
  });

  return [...hand];
};

/**
 * Generate a sequence of attack outcomes based on a given number of turns and miss probability,
 * where `true` indicates a missed attack.
 */
export const generateAttackOutcomes = (
  numTurns = 50,
  missProbability = 0.2
) => {
  const outcomes = [];
  for (let i = 0; i < numTurns; i++) {
    outcomes.push(Math.random() < missProbability);
  }
  return outcomes;
};
