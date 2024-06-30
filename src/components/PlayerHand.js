import Card from './Card';

const PlayerHand = ({ player, handleCardClick }) => {
  return (
    <div className='d-flex'>
      {player.hand.map((card, index) => (
        <div key={index} className='me-2'>
          <Card
            // type={player.id === 0 ? 'FRONT' : 'BACK'}
            type='FRONT' // FOR DEBUGGING
            player={player}
            card={card}
            handleCardClick={handleCardClick}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerHand;
