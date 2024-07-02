import { CardType, BASE_SCALE, CARD_HEIGHT, CARD_WIDTH } from './constants';

const Card = ({
  cardType = CardType.PLACEHOLDER,
  cardName,
  cardIndex,
  playerId = '0',
  handleCardClick = () => {},
  scale = BASE_SCALE,
}) => {
  const imgPrefix = 'images/cards';

  const frontImg = `${imgPrefix}/front/${cardName}.png`;
  const backImg = `${imgPrefix}/back/${playerId}.png`;
  const placeholderImg = `${imgPrefix}/placeholder/${playerId}.png`;

  const height = CARD_HEIGHT * scale;
  const width = CARD_WIDTH * scale;

  const cardContent = {
    [CardType.FRONT]: (
      <img
        src={frontImg}
        alt={cardName}
        height={height}
        width={width}
        onClick={() => handleCardClick(cardIndex)}
      />
    ),

    [CardType.BACK]: (
      <img src={backImg} alt='card back' height={height} width={width} />
    ),

    [CardType.PREVIEW]: (
      <img src={frontImg} alt={cardName} height={height} width={width} />
    ),

    [CardType.PLACEHOLDER]: (
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
