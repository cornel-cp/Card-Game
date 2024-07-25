import { useState } from 'react';
import { smallScale, avatarHeight, avatarWidth } from './utils/constants';
import { avatar, icon } from './utils/assetPaths';

const PlayerStats = ({ player, scale = smallScale }) => {
  const [isHovered, setIsHovered] = useState(false);

  const height = avatarHeight * scale;
  const width = avatarWidth * scale;

  const formatValueDisplay = (currentValue, maxValue) => {
    if (currentValue >= maxValue) {
      return `${currentValue} (+${currentValue - maxValue})`;
    } else {
      return `${currentValue} (-${maxValue - currentValue})`;
    }
  };

  return (
    <div className='d-flex align-items-center'>
      <div className='me-2'>
        <img
          src={avatar(player.id)}
          alt='avatar'
          height={height}
          width={width}
          data-bs-toggle='tooltip'
          data-bs-placement={player.id === '0' ? 'top' : 'bottom'}
          data-bs-title={player.id === '0' ? 'Player' : 'Opponent'}
        />
      </div>

      <div
        className='d-flex flex-column'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.hp} className='me-2' alt='hp' />
          <span className='fw-semibold'>
            {player.hp} {isHovered && `/ ${player.maxHp}`}
          </span>
        </div>

        <div className='d-flex align-items-center mb-2'>
          <img src={icon.atk} className='me-2' alt='atk' />
          <span className='fw-semibold'>
            {isHovered
              ? formatValueDisplay(player.atk, player.baseAtk)
              : player.atk}
          </span>
        </div>

        <div className='d-flex align-items-center'>
          <img src={icon.def} className='me-2' alt='def' />
          <span className='fw-semibold'>
            {isHovered
              ? formatValueDisplay(player.def, player.baseDef)
              : player.def}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
