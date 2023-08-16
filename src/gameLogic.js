import { p0, p1 } from "./data/player";
import { deck } from "./data/deck";
import { applyEffect } from "./effectHandler";
import { shuffle } from "./utils";

const setupData = () => {
  let G = {
    players: {
      0: p0,
      1: p1,
    },

    deck: shuffle(deck),
  };

  G.players[0].hand = G.deck.splice(0, 5);
  G.players[1].hand = G.deck.splice(0, 5);

  return G;
};

const drawCard = ({ G, ctx }) => {
  // if (G.deck.length === 0) {
  //   G.deck = shuffle(deck);
  // }

  const card = G.deck.pop();
  G.players[ctx.currentPlayer].hand.push(card);
};

const playCard = ({ G, ctx }, card) => {
  card.effects.forEach((e) => {
    applyEffect(G, ctx, e);
  });
};

export const WizardDuel = {
  name: "wizard-duel",

  setup: setupData,

  moves: {
    drawCard,
    playCard,
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  minPlayers: 1,
  maxPlayers: 1,

  endIf: ({ G }) => {
    if ((G.players[0].hp <= 0 && G.players[1].hp <= 0) || G.deck.length === 0) {
      return { draw: true };
    } else if (G.players[0].hp <= 0) {
      return { winner: "1" };
    } else if (G.players[1].hp <= 0) {
      return { winner: "0" };
    }
  },
};
