import { AVATAR_HEIGHT, AVATAR_WIDTH } from './utils/constants';
import { avatar, icon } from './utils/assetPaths';

const PlayerInfo = ({ player }) => {
  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img
          src={avatar(player.id)}
          alt='avatar'
          height={AVATAR_HEIGHT}
          width={AVATAR_WIDTH}
        />
      </div>

      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.hp} className='me-2' alt='hp' />
          <span>{player.hp}</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.atk} className='me-2' alt='atk' />
          <span>{player.atk}</span>
        </div>
        <div className='d-flex align-items-center'>
          <img src={icon.def} className='me-2' alt='def' />
          <span>{player.def}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
