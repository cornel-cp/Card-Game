import Card from './Card';
import { CardType } from './utils/constants';

const PlayerHand = ({ player, showEnemyHand, handleCardClick }) => {
  return (
    <div className='d-flex justify-content-center'>
      {player.hand.map((card, index) => (
        <div key={index} className='me-2'>
          {showEnemyHand || player.id === '0' ? (
            <Card
              cardType={CardType.front}
              cardId={card.id}
              cardIndex={index}
              handleCardClick={handleCardClick}
            />
          ) : (
            <Card cardType={CardType.back} playerId='1' />
          )}
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
