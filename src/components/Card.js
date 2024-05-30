import React from 'react';

const Card = ({ onClick }) => {
  // TODO: Pass name and isOpponent from props
  const name = 'Fireball I';
  const frontImage = `images/cards/front/${name}.png`;
  const backImage = 'images/cards/back/player.png';

  return (
    <div>
      <img src={frontImage} alt='card front' width='10%' height='10%' onClick={onClick} />
      {/* <img src={backImage} alt="card back" width="10%" height="10%" /> */}
    </div>
  );
};

export default Card;
