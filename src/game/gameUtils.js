export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

export const hasCard = (hand, cid) => {
  const idx = hand.findIndex((card) => card.id === cid);
  return idx !== -1;
};

export const removeCard = (hand, cid) => {
  const idx = hand.findIndex((card) => card.id === cid);
  if (idx !== -1) {
    hand.splice(idx, 1);
  }
};

export const logPlay = (G, ctx, card) => {
  const p = G.players[ctx.currentPlayer];
  console.log(`Turn ${ctx.turn}: ${p.name} played ${card.name} (${card.text})`);

  Object.keys(G.players).forEach((pid) => {
    const p = G.players[pid];
    console.log(
      `%c${p.name}: HP: ${p.hp}, Attack: ${p.atk}, Shield: ${p.def}`,
      `color: ${pid === "0" ? "blue" : "red"}`
    );
  });
};

export const isVictory = ({ G }) => {
  if ((G.players[0].hp <= 0 && G.players[1].hp <= 0) || G.deck.length === 0) {
    return { draw: true };
  } else if (G.players[0].hp <= 0) {
    return { winner: "1" };
  } else if (G.players[1].hp <= 0) {
    return { winner: "0" };
  }
};

export const logGameResult = ({ G, ctx }) => {
  if (!ctx.gameover.winner) {
    console.log("Draw!");
  } else {
    console.log(`${G.players[ctx.gameover.winner].name} wins!`);
  }
};

export const generateAIMoves = (G, ctx) => {
  let moves = [];
  G.players[ctx.currentPlayer].hand.forEach((card) => {
    moves.push({ move: "playCard", args: [card] });
  });
  return moves;
};
