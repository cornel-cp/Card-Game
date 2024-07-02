import { AVATAR_HEIGHT, AVATAR_WIDTH } from './clientUtils/constants';
import { getAvatarPath, ICON_PATHS } from './clientUtils/assetPaths';

const PlayerInfo = ({ player }) => {
  const avatarImg = getAvatarPath(player.id);
  const hpImg = ICON_PATHS.hp;
  const atkImg = ICON_PATHS.atk;
  const defImg = ICON_PATHS.def;

  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img
          src={avatarImg}
          alt='avatar'
          height={AVATAR_HEIGHT}
          width={AVATAR_WIDTH}
        />
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
