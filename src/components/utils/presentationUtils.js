import { cleanse, defrost, miss, potion, cardAudio } from './assetPaths';
import { EffectType } from '../../data/cardEffects';
import { CardKeyword } from '../../data/cards';

/**
 * Returns the corresponding audio path when a card is played.
 *  1. If the played card contains the `effect` keyword and the current turn is set to clear all effects, play the `cleanse` audio.
 *  2. If the current player has an active `freeze` effect, play the `defrost` audio.
 *  3. If the played card contains the `damage` keyword and the current attack is set to miss, play the `miss` audio.
 *  4. If the played card has single effect which is self-healing and the current player has `poison` effect, play the `potion` audio.
 *  5. In all other cases, play the default audio associated with the card.
 */
export const resolveCardAudio = (card, G, ctx) => {
  const hasFreezeEffect = G.players[ctx.currentPlayer].effects.some(
    (e) => e.type === EffectType.freeze
  );
  const hasPoisonEffect = G.players[ctx.currentPlayer].effects.some(
    (e) => e.type === EffectType.poison
  );
  const hasDamageKeyword = card.keywords.includes(CardKeyword.damage);
  const hasEffectKeyward = card.keywords.includes(CardKeyword.effect);
  const isUniqueHealCard =
    card.effects.length === 1 && card.effects[0].type === EffectType.heal;
  const shouldMiss = G.globalEffects.shouldMiss?.[ctx.turn - 1];
  const shouldClearEffects = G.globalEffects.shouldClearEffects?.[ctx.turn - 1];

  if (hasEffectKeyward && shouldClearEffects) {
    return cleanse;
  } else if (hasFreezeEffect) {
    return defrost;
  } else if (hasDamageKeyword && shouldMiss) {
    return miss;
  } else if (isUniqueHealCard && hasPoisonEffect) {
    return potion;
  } else {
    return cardAudio(card.id);
  }
};

/**
 * Returns a list of cards for the player to select from when a turn begins.
 * When there is only one card left in the deck, the list contains that single card only,
 * otherwise it will always have two cards randomly picked from the deck.
 *
 * This should only be invoked when `DrawMode.select` is enabled for current level.
 */
export const getSelectableCardIds = (G) => {
  if (G.deck.length === 0) {
    throw new Error('Deck must have at least one card.');
  }
  if (G.deck.length === 1) {
    return [G.deck[0].id];
  }
  let firstIndex = Math.floor(Math.random() * G.deck.length);
  let secondIndex = Math.floor(Math.random() * G.deck.length);
  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * G.deck.length);
  }
  return [G.deck[firstIndex].id, G.deck[secondIndex].id];
};
