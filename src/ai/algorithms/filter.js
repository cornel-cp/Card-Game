import { EffectGroupName } from '../../data/cardEffects';
import { CardKeyword } from '../../data/cards';
import { isUnique, hasEffect, getTarget } from '../../game/effectUtils';
import { random } from './random';
import { removeBuffCards, removeDebuffCards, uselessCards } from './algoUtils';

/**
 * Filters unwanted card play from AI's hand based on a chain of rules.
 * The rules are ranked by priority, more prioritized rules get evaluated first.
 * This function should be invoked before resolveAction().
 *
 * @returns A list of filtered cards.
 */
export const filterActions = (cards, G, ctx) => {
  let cardsBefore = cards;
  for (const { rule } of filters) {
    const [result, cardsAfter] = applyFilter(cardsBefore, rule, G, ctx);
    if (result) {
      // console.log(`Exit from filter rule: ${reason}`);
      return [result];
    }
    cardsBefore = cardsAfter;
  }
  return cardsBefore;
};

const filters = [
  {
    rule: (card, G, ctx) => !uselessCards.includes(card.id),
    reason: 'Filter useless cards',
  },
  {
    rule: (card, G, ctx) =>
      card.id !== '30' || G.players[0].hp > G.players[1].hp,
    reason: 'Filter Mutate when AI has higher or equal HP',
  },
  {
    rule: (card, G, ctx) =>
      !removeDebuffCards.includes(card.id) ||
      G.players[1].effects.some((e) => e.group === EffectGroupName.debuff),
    reason: 'Filter cards to remove debuff when AI has no debuff',
  },
  {
    rule: (card, G, ctx) =>
      !removeBuffCards.includes(card.id) ||
      G.players[0].effects.some((e) => e.group === EffectGroupName.buff),
    reason: 'Filter cards to remove buff when player has no buff',
  },
  {
    rule: (card, G, ctx) =>
      G.players[1].hp < Math.ceil(G.players[1].maxHp * 0.7) ||
      !card.keywords.includes(CardKeyword.sustain),
    reason: 'Filter healing cards when AI has high HP',
  },
  {
    rule: (card, G, ctx) => {
      return !card.effects.some((effect) => {
        const target = getTarget(ctx.currentPlayer, effect.target);
        return isUnique(effect) && hasEffect(G, target, effect.type);
      });
    },
    reason:
      'Filter unique effect cards when the same effect is already applied',
  },
];

const applyFilter = (cardsBefore, ruleFn, G, ctx) => {
  const cardsAfter = cardsBefore.filter((card) => ruleFn(card, G, ctx));
  return onFilterEnd(cardsBefore, cardsAfter);
};

const onFilterEnd = (cardsBefore, cardsAfter) => {
  let result; // Result after current filter

  if (cardsAfter.length === 1) {
    // Return the only action left and stop filtering
    result = cardsAfter[0];
  } else if (cardsAfter.length === 0) {
    // Fallback to Sandstorm || random(original cards) when no cards left
    result = cardsBefore.some((card) => card.id === '24')
      ? cardsBefore.find((card) => card.id === '24')
      : random(cardsBefore);
  } else {
    // Continue filtering
    result = null;
  }

  return [result, cardsAfter];
};
