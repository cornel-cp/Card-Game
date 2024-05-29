import { INVALID_MOVE } from "boardgame.io/core";
import { p0, p1 } from "../data/player";
import { deck } from "../data/deck";
import { applyEffect } from "./effect";
import {
  shuffle,
  hasCard,
  removeCard,
  logPlay,
  isVictory,
  logGameResult,
  generateAIMoves,
  dealCards,
} from "./gameUtils";

const setupData = () => {
  let G = {
    players: {
      0: { ...p0 },
      1: { ...p1 },
    },

    deck: shuffle([...deck]),
  };

  dealCards(G.players[0].hand, G.deck);
  dealCards(G.players[1].hand, G.deck);

  return G;
};

const drawCard = ({ G, ctx }) => {
  if (ctx.turn <= 2) return;

  const hand = G.players[ctx.currentPlayer].hand;
  if (hand.length >= 5 || G.deck.length === 0) return INVALID_MOVE;

  hand.push(G.deck.pop());

  if (G.deck.length === 0) {
    G.deck = shuffle([...deck]);
  }
};

const playCard = ({ G, ctx }, card) => {
  const hand = G.players[ctx.currentPlayer].hand;
  if (!hasCard(hand, card.id)) return INVALID_MOVE;

  if (!card.effects || card.effects.length === 0) return INVALID_MOVE;

  card.effects.forEach((e) => {
    applyEffect(G, ctx, e);
  });

  removeCard(hand, card.id);

  logPlay(G, ctx, card);
};

export const WizardDuel = {
  name: "wizard-duel",

  setup: setupData,

  moves: {
    playCard,
  },

  turn: {
    onBegin: drawCard,

    minMoves: 1,
    maxMoves: 1,
  },

  endIf: isVictory,

  onEnd: logGameResult,
  // onEnd: ({ ctx }) => console.log(ctx.turn),

  ai: {
    enumerate: generateAIMoves,
  },
};
