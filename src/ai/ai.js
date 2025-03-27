import { random } from './algorithms/random';
import { filterActions } from './algorithms/filter';
import { resolveAction } from './algorithms/resolver';

export const Algorithm = {
  // AI makes random moves.
  random: 'random',

  // AI filters bad moves, but is not able to make optimal moves.
  filter: 'filter',

  // AI makes optimal moves based on the board state but is unaware of level effects.
  optimal: 'optimal',
};

/**
 * Encapsulates the decision-making logic for the AI to play a card.
 * Example usage: const selectedIndex = AI(Algorithm.filter)(G, ctx);
 *
 * @returns The index of the card to play from the AI's hand.
 */
export const AI = (algo) => (G, ctx) => {
  const cards = G.players[1].hand;

  const strategies = {
    random: () => random(cards),

    filter: () => random(filterActions(cards, G, ctx)),

    optimal: () => {
      const actions = filterActions(cards, G, ctx);
      return actions.length === 1 ? actions[0] : resolveAction(actions, G);
    },
  };
  return cardToIndex((strategies[algo] || strategies.random)(), cards);
};

const cardToIndex = (card, hand) => hand.findIndex((c) => c.id === card.id);
