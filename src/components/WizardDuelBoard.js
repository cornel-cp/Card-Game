import Card from './Card';
import PlayerHand from './PlayerHand';
import PlayerInfo from './PlayerInfo';
import { FireballI } from '../data/cards';

const WizardDuelBoard = ({ ctx, G, moves }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  const handleCardClick = async (card) => {
    // Check if currentPlayer is same as card owner
    
    // Player turn
    moves.playCard(card);

    // TODO: Preview the played card at center of the board
  
    // // Sleep
    // await sleep(2000);
  
    // // AI turn if game does not end yet
    // moves.playCard(card);

    // TODO: Preview the played card at center of the board

    // // Sleep
    // await sleep(2000);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // TODO - If game ends, bring up game over overlay screen

  return (
    <div>
      {/* <Card
        type='FRONT'
        player={ctx.currentPlayer}
        name='Fireball I'
        onCardClick={onCardClick}
      /> */}
      <PlayerHand
        player={0}
        hand={G.players[0].hand}
        handleCardClick={handleCardClick}
      />
      {/* <PlayerInfo hp={G.players[ctx.currentPlayer].hp} /> */}
    </div>
  );
};

export default WizardDuelBoard;
