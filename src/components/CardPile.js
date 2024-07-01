const CardPile = ({ height = '210px', width = '150px' }) => {
  const pileImg = 'images/cards/pile.png';

  return (
    <div className='d-flex justify-content-end align-items-center h-100'>
      <img src={pileImg} alt='card pile' height={height} width={width} />
    </div>
  );
};

export default CardPile;
