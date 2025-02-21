import { useState } from 'react';
import { smallScale, avatarHeight, avatarWidth } from './utils/constants';
import { getAvatarForLevel, icon } from './utils/assetPaths';
import { EffectType } from '../data/cardEffects';

const PlayerStatsPanel = ({ player, level, scale = smallScale }) => {
  const [isStatsIconsHovered, setIsStatsIconsHovered] = useState(false);

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
      <div
        className='me-2 position-relative'
        data-bs-toggle='tooltip'
        data-bs-placement={player.id === '0' ? 'top' : 'bottom'}
        data-bs-title={player.id === '0' ? 'Player' : 'Opponent'}
      >
        <img
          src={getAvatarForLevel(player.id, level)}
          alt='avatar'
          height={height}
          width={width}
        />

        {player.effects.some((e) => e.type === EffectType.freeze) && (
          <img src={icon.ice} alt='ice' className='ice-overlay' />
        )}
      </div>

      <div
        className='d-flex flex-column'
        onMouseEnter={() => setIsStatsIconsHovered(true)}
        onMouseLeave={() => setIsStatsIconsHovered(false)}
      >
        <div className='d-flex align-items-center mb-2'>
          <img src={icon.hp} className='me-2' alt='hp' />
          <span className='fw-semibold'>
            {player.hp} {isStatsIconsHovered && `/ ${player.maxHp}`}
          </span>
        </div>

        <div className='d-flex align-items-center mb-2'>
          <img src={icon.atk} className='me-2' alt='atk' />
          <span className='fw-semibold'>
            {isStatsIconsHovered
              ? formatValueDisplay(player.atk, player.baseAtk)
              : player.atk}
          </span>
        </div>

        <div className='d-flex align-items-center'>
          <img src={icon.def} className='me-2' alt='def' />
          <span className='fw-semibold'>
            {isStatsIconsHovered
              ? formatValueDisplay(player.def, player.baseDef)
              : player.def}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsPanel;
