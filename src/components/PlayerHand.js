import Card from './Card';
import { CardType } from './clientUtils/constants';

const PlayerHand = ({ player, handleCardClick }) => {
  return (
    <div className='d-flex'>
      {player.hand.map((card, index) => (
        <div key={index} className='me-2'>
          {/* FOR DEBUGGING */}
          <Card
            cardType={CardType.FRONT}
            cardName={card.name}
            cardIndex={index}
            handleCardClick={handleCardClick}
          />

          {/* {player.id === '0' ? (
            <Card
              cardType={CardType.FRONT}
              cardName={card.name}
              cardIndex={index}
              handleCardClick={handleCardClick}
            />
          ) : (
            <Card cardType={CardType.BACK} playerId='1' />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
