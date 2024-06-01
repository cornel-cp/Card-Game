import Card from './Card';
import { FireballI } from '../data/cards';

const WizardDuelBoard = ({ ctx, G, moves }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  return (
    <div>
      <Card
        type='front'
        isOpponent={false}
        name='Fireball I'
        onCardClick={() => moves.playCard(FireballI)}
      />
    </div>
  );
};

export default WizardDuelBoard;
