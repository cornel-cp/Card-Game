import { avatarHeight, avatarWidth } from './utils/constants';
import { avatar, icon } from './utils/assetPaths';

const PlayerStats = ({ player }) => {
  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img
          src={avatar(player.id)}
          alt='avatar'
          height={avatarHeight}
          width={avatarWidth}
          data-bs-toggle='tooltip'
          data-bs-placement={player.id === '0' ? 'top' : 'bottom'}
          data-bs-title={player.id === '0' ? 'Player' : 'Opponent'}
        />
      </div>

      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.hp} className='me-2' alt='hp' />
          <span className='fw-semibold'>{player.hp}</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.atk} className='me-2' alt='atk' />
          <span className='fw-semibold'>{player.atk}</span>
        </div>
        <div className='d-flex align-items-center'>
          <img src={icon.def} className='me-2' alt='def' />
          <span className='fw-semibold'>{player.def}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
