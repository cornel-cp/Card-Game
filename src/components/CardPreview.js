import Card from './Card';
import { CardType, MEDIUM_SCALE } from './utils/constants';

const CardPreview = ({ selectedCard }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      {selectedCard === null ? (
        <Card
          cardType={CardType.PLACEHOLDER}
          playerId='0'
          scale={MEDIUM_SCALE}
        />
      ) : (
        <Card
          cardType={CardType.PREVIEW}
          cardName={selectedCard.name}
          scale={MEDIUM_SCALE}
        />
      )}
    </div>
  );
};

export default CardPreview;
