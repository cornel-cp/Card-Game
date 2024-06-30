const PlayerInfo = ({ player }) => {
  const avatarImg = `images/avatars/${player.id}.png`;
  const hpImg = 'images/icons/hp.svg';
  const atkImg = 'images/icons/atk.svg';
  const defImg = 'images/icons/def.svg';

  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img src={avatarImg} alt='avatar' height='125px' width='125px' />
      </div>

      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center mb-2'>
          <img src={hpImg} className='me-2' alt='hp' />
          <span>{player.hp}</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <img src={atkImg} className='me-2' alt='atk' />
          <span>{player.atk}</span>
        </div>
        <div className='d-flex align-items-center'>
          <img src={defImg} className='me-2' alt='def' />
          <span>{player.def}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
