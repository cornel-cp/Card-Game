import { CardType, baseScale, cardHeight, cardWidth } from './utils/constants';
import { cardFront, cardBack, cardPlaceholder } from './utils/assetPaths';

const Card = ({
  cardType = CardType.placeholder,
  cardName,
  cardIndex,
  playerId = '0',
  handleCardClick = () => {},
  scale = baseScale,
}) => {
  const frontImg = cardFront(cardName);
  const backImg = cardBack(playerId);
  const placeholderImg = cardPlaceholder(playerId);

  const height = cardHeight * scale;
  const width = cardWidth * scale;

  const cardContent = {
    [CardType.front]: (
      <img
        src={frontImg}
        alt={cardName}
        height={height}
        width={width}
        onClick={() => handleCardClick(cardIndex)}
      />
    ),

    [CardType.back]: (
      <img src={backImg} alt='card back' height={height} width={width} />
    ),

    [CardType.preview]: (
      <img src={frontImg} alt={cardName} height={height} width={width} />
    ),

    [CardType.placeholder]: (
      <img
        src={placeholderImg}
        alt='card placeholder'
        height={height}
        width={width}
      />
    ),
  };

  return <div>{cardContent[cardType]}</div>;
};

export default Card;
