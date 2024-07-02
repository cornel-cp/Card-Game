import { BASE_SCALE, CARD_HEIGHT, CARD_WIDTH } from './clientUtils/constants';
import { CARD_PILE_PATH } from './clientUtils/assetPaths';

const CardPile = ({ scale = BASE_SCALE }) => {
  const height = CARD_HEIGHT * scale;
  const width = CARD_WIDTH * scale;

  return (
    <div className='d-flex justify-content-end align-items-center h-100'>
      <img src={CARD_PILE_PATH} alt='card pile' height={height} width={width} />
    </div>
  );
};

export default CardPile;
