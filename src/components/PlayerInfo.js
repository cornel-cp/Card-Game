const PlayerInfo = ({ name, avatar, hp, atk, def }) => {
  const avatarImg = 'images/avatars/player.png';
//   const avatarImg = 'images/avatars/opponent.png';
  const hpImg = 'images/icons/hp.svg';
  const atkImg = 'images/icons/atk.svg';
  const defImg = 'images/icons/def.svg';

  return (
    <div className='d-flex align-items-center'>
      <div className='me-3'>
        <img src={avatarImg} alt='avatar' />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center mb-2'>
          <img className='me-2' src={hpImg} alt='hp' />
          <span>45</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <img className='me-2' src={atkImg} alt='atk' />
          <span>3</span>
        </div>
        <div className='d-flex align-items-center'>
          <img className='me-3' src={defImg} alt='def' />
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
