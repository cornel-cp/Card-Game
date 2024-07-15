import { CardType, mediumScale } from './utils/constants';
import Card from './Card';

const CardPreview = ({ selectedCard }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      {selectedCard === null ? (
        <Card
          cardType={CardType.placeholder}
          playerId='0'
          scale={mediumScale}
        />
      ) : (
        <Card
          cardType={CardType.preview}
          cardId={selectedCard.id}
          scale={mediumScale}
        />
      )}
    </div>
  );
};

export default CardPreview;
