import Card from './Card';
import { CardType } from './utils/constants';

const PlayerHand = ({ player, handleCardClick }) => {
  return (
    <div className='d-flex'>
      {player.hand.map((card, index) => (
        <div key={index} className='me-2'>
          {/* FOR DEBUGGING */}
          <Card
            cardType={CardType.front}
            cardId={card.id}
            cardIndex={index}
            handleCardClick={handleCardClick}
          />

          {/* {player.id === '0' ? (
            <Card
              cardType={CardType.front}
              cardId={card.id}
              cardIndex={index}
              handleCardClick={handleCardClick}
            />
          ) : (
            <Card cardType={CardType.back} playerId='1' />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
