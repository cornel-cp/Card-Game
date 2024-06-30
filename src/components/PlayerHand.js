import Card from './Card';

const PlayerHand = ({ player, hand, handleCardClick }) => {
  return (
    <div className='d-flex p-2'>
      {hand.map((card, index) => (
        <div key={index} className='mx-2'>
          <Card
            type={player === 0 ? 'FRONT' : 'BACK'}
            player={player}
            name={card.name}
            card={card}
            handleCardClick={handleCardClick}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
