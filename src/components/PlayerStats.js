import { avatarHeight, avatarWidth } from './utils/constants';
import { avatar, icon } from './utils/assetPaths';
import './styles/styles.css';

const PlayerStats = ({ player }) => {
  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img
          src={avatar(player.id)}
          alt='avatar'
          height={avatarHeight}
          width={avatarWidth}
        />
      </div>

      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.hp} className='me-2' alt='hp' />
          <span className='font-lora-bold'>{player.hp}</span>
        </div>
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.atk} className='me-2' alt='atk' />
          <span className='font-lora-bold'>{player.atk}</span>
        </div>
        <div className='d-flex align-items-center'>
          <img src={icon.def} className='me-2' alt='def' />
          <span className='font-lora-bold'>{player.def}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
