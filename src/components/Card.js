const Card = ({
  type = 'default',
  isOpponent = false,
  name = '',
  height = '8%',
  width = '8%',
  onCardClick = () => {},
}) => {
  const imgPrefix = 'images/cards';

  const frontImg = `${imgPrefix}/front/${name}.png`;
  const backImg = `${imgPrefix}/back/${isOpponent ? 'opponent' : 'player'}.png`;
  const defaultImg = `${imgPrefix}/default/${
    isOpponent ? 'opponent' : 'player'
  }.png`;

  const cardContent = {
    front: (
      <img
        src={frontImg}
        alt={name}
        height={height}
        width={width}
        onClick={onCardClick}
      />
    ),
    back: <img src={backImg} alt='back' height={height} width={width} />,
    default: (
      <img src={defaultImg} alt='default' height={height} width={width} />
    ),
  };

  return (
    <div className={`card ${type}`}>
      {cardContent[type] || cardContent.default}
    </div>
  );
};

export default Card;
