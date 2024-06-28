import Card from './Card';
import PlayerInfo from './PlayerInfo';
import { FireballI } from '../data/cards';

const WizardDuelBoard = ({ ctx, G, moves }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div>
      <Card
        type='front'
        isOpponent={false}
        name='Fireball I'
        onCardClick={async () => {
          // Player turn
          moves.playCard(FireballI);

          // Sleep
          await sleep(2000);

          // AI turn if game does not end yet
          moves.playCard(FireballI);
        }}
      />
      <PlayerInfo hp={G.players[ctx.currentPlayer].hp} />
    </div>
  );
};

export default WizardDuelBoard;
