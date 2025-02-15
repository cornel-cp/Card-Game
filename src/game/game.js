import { INVALID_MOVE } from 'boardgame.io/core';
import { p0, p1 } from '../data/player';
import { getDeckForLevel } from '../data/deck';
import { applyEffect } from './effect';
import {
  shuffle,
  removeCard,
  getCardById,
  removeCardById,
  logPlay,
  isVictory,
  onGameEnd,
  generateAIMoves,
  dealCards,
  getCurrentLevel,
  applyLevelOverride,
  applyHandEffects,
} from './gameUtils';

const setupData = () => {
  let level = getCurrentLevel();
  console.log(`Current level is ${level}`);

  let G = {
    players: {
      0: { ...p0 },
      1: { ...p1 },
    },

    deck: shuffle([...getDeckForLevel(level)]),

    level: level,

    globalEffects: [],
  };

  applyLevelOverride(G);

  dealCards(G.players[0].hand, G.deck);
  dealCards(G.players[1].hand, G.deck);

  return G;
};

const drawCard = ({ G, ctx }, cardId = '') => {
  if (ctx.turn <= 2) return;

  applyHandEffects(G, ctx);

  const hand = G.players[ctx.currentPlayer].hand;
  if (hand.length >= 5 || G.deck.length === 0) return INVALID_MOVE;

  if (cardId !== '') {
    // Select mode
    const card = getCardById(G.deck, cardId);
    if (!card) {
      throw new Error(`Card with id ${cardId} not found in the deck.`);
    }
    hand.push(card);
    removeCardById(G.deck, cardId); 
  } else {
    // Draw mode
    hand.push(G.deck.pop());
  }

  // Make sure the deck has at least 2 cards for Select mode to work properly
  if (G.deck.length <= 1) { 
    console.log('Deck is almost empty, shuffling...');
    G.deck = shuffle([...getDeckForLevel(G.level)]);
  }
};

const playCard = ({ G, ctx }, index) => {
  const hand = G.players[ctx.currentPlayer].hand;
  if (index < 0 || index >= hand.length) return INVALID_MOVE;

  const card = hand[index];
  if (card.effects) {
    card.effects.forEach((e) => {
      applyEffect(G, ctx, e);
    });
  }

  removeCard(hand, index);

  logPlay(G, ctx, card);
};

export const WizardDuel = {
  name: 'wizard-duel',

  setup: setupData,

  moves: {
    drawCard,
    playCard,
  },

  turn: {
    // Call this manually via moves as a client workaround to have a delay interval between actions
    // onBegin: drawCard,

    minMoves: 2,
    maxMoves: 2,
  },

  endIf: isVictory,

  onEnd: onGameEnd,
  // onEnd: ({ ctx }) => console.log(ctx.turn),

  ai: {
    // Remove drawCard from moves
    // Uncomment onBegin: drawCard
    // Change minMoves and maxMoves to 1
    enumerate: generateAIMoves,
  },
};
