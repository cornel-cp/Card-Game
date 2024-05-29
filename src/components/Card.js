import React from 'react';

const Card = () => {
  // TODO: Pass name and isOpponent from props
  const name = 'Fireball I';
  const frontImage = `images/cards/front/${name}.png`;
  const backImage = "images/cards/back/Player.png";

  return (
    <div>
      <img src={frontImage} alt="card front" width="10%" height="10%" />
      {/* <img src={backImage} alt="card back" width="10%" height="10%" /> */}
    </div>
  );
};

export default Card;
