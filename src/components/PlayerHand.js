import Card from './Card';

const PlayerHand = ({ player, handleCardClick }) => {
  return (
    <div className='d-flex'>
      {player.hand.map((card, index) => (
        <div key={index} className='me-2'>
          {/* FOR DEBUGGING */}
          <Card
            type='FRONT'
            cardName={card.name}
            cardIndex={index}
            handleCardClick={handleCardClick}
          />

          {/* {player.id === '0' ? (
            <Card
              type='FRONT'
              cardName={card.name}
              cardIndex={index}
              handleCardClick={handleCardClick}
            />
          ) : (
            <Card
              type='BACK' 
              playerId='1'
            />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
