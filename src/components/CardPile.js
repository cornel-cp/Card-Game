import { smallScale, cardHeight, cardWidth } from './utils/constants';
import { cardPile } from './utils/assetPaths';

const CardPile = ({ scale = smallScale }) => {
  const height = cardHeight * scale;
  const width = cardWidth * scale;

  return (
    <div className='d-flex justify-content-end align-items-center h-100'>
      <img
        src={cardPile}
        alt='card pile'
        height={height}
        width={width}
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Deck'
      />
    </div>
  );
};

export default CardPile;
