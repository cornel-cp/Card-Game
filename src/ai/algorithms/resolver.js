import { EffectGroupName, EffectType } from '../../data/cardEffects';
import { CardKeyword } from '../../data/cards';
import { random } from './random';

/**
 * Resolves the card to play from a list of filtered actions.
 * The rules are ranked by priority, more prioritized rules get evaluated first.
 * This function should only be invoked when there's more than 1 card left after filterActions().
 *
 * @returns The resolved card object.
 */
export const resolveAction = (actions, G) => {
  // When AI is frozen, resolve to random(cards)
  if (G.players[1].effects.some((e) => e.type === EffectType.freeze)) {
    console.log('Resolve to random card when frozen');
    return random(actions);
  }

  // When HP diff is huge, resolve to random(Mutate) if any
  if (
    actions.some((card) => card.id === '30') &&
    G.players[0].hp - G.players[1].hp >= 20
  ) {
    console.log('Resolve to Mutate');
    return actions.find((card) => card.id === '30');
  }

  // When AI has multiple debuffs, resolve to random(Purify/Wish4) if any
  const removeDebuffCards = ['16', '28'];
  if (
    actions.some((card) => removeDebuffCards.includes(card.id)) &&
    G.players[1].effects.filter((e) => e.group === EffectGroupName.debuff)
      .length >= 2
  ) {
    console.log('Resolve to removing debuff');
    return actions.find((card) => removeDebuffCards.includes(card.id));
  }

  // When player has multiple buffs, resolve to random(Dispel/Wish2/Ambush) if any
  const removeBuffCards = ['15', '26', '31'];
  if (
    actions.some((card) => removeBuffCards.includes(card.id)) &&
    G.players[0].effects.filter((e) => e.group === EffectGroupName.buff)
      .length >= 2
  ) {
    console.log('Resolve to removing buff');
    return actions.find((card) => removeBuffCards.includes(card.id));
  }

  // When AI is low on HP, resolve to random(CardKeyword.sustain) if any
  if (
    actions.some((card) => card.keywords.includes(CardKeyword.sustain)) &&
    G.players[1].hp <= Math.ceil(G.players[1].maxHp * 0.3)
  ) {
    console.log('Resolve to healing cards');
    return actions.find((card) => card.keywords.includes(CardKeyword.sustain));
  }

  // When AI has next damage x2 or high atk or player has low def or player is low on HP,
  // resolve to random(CardKeyword.damage) if any
  if (
    actions.some((card) => card.keywords.includes(CardKeyword.damage)) &&
    (G.players[1].effects.some((e) => e.type === EffectType.doubleDmg) ||
      G.players[1].atk >= G.players[1].baseAtk + 3 ||
      G.players[0].def <= G.players[0].baseDef - 3 ||
      G.players[0].hp <= Math.ceil(G.players[0].maxHp * 0.3))
  ) {
    console.log('Resolve to damage cards');
    return actions.find((card) => card.keywords.includes(CardKeyword.damage));
  }

  // Resolve to cards with powerful effects if any
  // random(Flame/Resurrect/Aura/Wish3/Wish5/Tide/Revenge/Poison)
  const powerfulCards = ['20', '21', '23', '27', '29', '33', '34', '35'];
  if (actions.some((card) => powerfulCards.includes(card.id))) {
    console.log('Resolve to powerful cards');
    return actions.find((card) => powerfulCards.includes(card.id));
  }

  // Resolve to random(original actions)
  console.log('Exit from resolver fallback');
  return random(actions);
};
