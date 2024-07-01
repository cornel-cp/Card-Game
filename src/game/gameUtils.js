export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

export const dealCards = (hand, deck) => {
  hand.push(...deck.splice(0, 5 - hand.length));
};

export const removeCard = (hand, index) => {
  if (index !== -1) {
    hand.splice(index, 1);
  }
};

export const logPlay = (G, ctx, card) => {
  const p = G.players[ctx.currentPlayer];
  console.log(`Turn ${ctx.turn}: ${p.name} played ${card.name} (${card.text})`);
  Object.keys(G.players).forEach((pid) => {
    const p = G.players[pid];
    console.log(
      `%c${p.name}: HP: ${p.hp}, Attack: ${p.atk}, Shield: ${p.def}`,
      `color: ${pid === '0' ? 'blue' : 'red'}`
    );
  });
};

export const isVictory = ({ G, ctx }) => {
  if ((G.players[0].hp <= 0 && G.players[1].hp <= 0) || ctx.turn >= 50) {
    return { draw: true };
  } else if (G.players[0].hp <= 0) {
    return { winner: '1' };
  } else if (G.players[1].hp <= 0) {
    return { winner: '0' };
  }
};

export const logGameResult = ({ G, ctx }) => {
  if (!ctx.gameover.winner) {
    console.log('Draw!');
  } else {
    console.log(`${G.players[ctx.gameover.winner].name} wins!`);
  }
};

export const generateAIMoves = (G, ctx) => {
  let moves = [];
  G.players[ctx.currentPlayer].hand.forEach((card) => {
    moves.push({ move: 'playCard', args: [card] });
  });
  return moves;
};
