const Card = ({
  type = 'PLACEHOLDER',
  cardName,
  cardIndex,
  playerId = '0',
  handleCardClick = () => {},
  scale = 1,
}) => {
  const imgPrefix = 'images/cards';

  const frontImg = `${imgPrefix}/front/${cardName}.png`;
  const backImg = `${imgPrefix}/back/${playerId}.png`;
  const placeholderImg = `${imgPrefix}/placeholder/${playerId}.png`;

  const height = 210 * scale;
  const width = 150 * scale;

  const cardContent = {
    FRONT: (
      <img
        src={frontImg}
        alt={cardName}
        height={height}
        width={width}
        onClick={() => handleCardClick(cardIndex)}
      />
    ),

    BACK: <img src={backImg} alt='card back' height={height} width={width} />,

    PREVIEW: (
      <img src={frontImg} alt={cardName} height={height} width={width} />
    ),

    PLACEHOLDER: (
      <img
        src={placeholderImg}
        alt='card placeholder'
        height={height}
        width={width}
      />
    ),
  };

  return <div>{cardContent[type] || cardContent.PLACEHOLDER}</div>;
};

export default Card;
