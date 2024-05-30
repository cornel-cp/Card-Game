import Card from './Card';
import { FireballI } from '../data/cards';

const WizardDuelBoard = ({ ctx, G, moves }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  return <Card onClick={() => moves.playCard(FireballI)} />;
};

export default WizardDuelBoard;
