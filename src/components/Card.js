const Card = ({
  type = 'PLACEHOLDER',
  player, // 0 - PLAYER, 1 - OPPONENT
  name,
  card,
  handleCardClick,
  height = '210px',
  width = '150px',
}) => {
  const imgPrefix = 'images/cards';

  const frontImg = `${imgPrefix}/front/${name}.png`;
  const backImg = `${imgPrefix}/back/${player}.png`;
  const placeholderImg = `${imgPrefix}/placeholder/${player}.png`;

  const cardContent = {
    FRONT: (
      <img
        src={frontImg}
        alt={name}
        height={height}
        width={width}
        onClick={() => handleCardClick(card)}
      />
    ),

    BACK: <img src={backImg} alt='card back' height={height} width={width} />,

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
