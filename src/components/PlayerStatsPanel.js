import { useState } from 'react';
import {
  avatarHeight,
  avatarWidth,
  avatarMediumScale,
} from './utils/constants';
import { getAvatarForLevel, icon } from './utils/assetPaths';
import { getEnemyName } from './utils/scripts';
import { EffectType } from '../data/cardEffects';

const PlayerStatsPanel = ({
  player,
  level,
  showCardAnimation,
  cardAnimationData,
}) => {
  const [isStatsIconsHovered, setIsStatsIconsHovered] = useState(false);

  const height = avatarHeight * avatarMediumScale;
  const width = avatarWidth * avatarMediumScale;

  const formatValueDisplay = (currentValue, maxValue) => {
    if (currentValue >= maxValue) {
      return `${currentValue} (+${currentValue - maxValue})`;
    } else {
      return `${currentValue} (-${maxValue - currentValue})`;
    }
  };

  return (
    <div className='d-inline-block p-2 rounded bg-panel'>
      <div className='d-flex align-items-center'>
        <div
          className='me-3 position-relative'
          data-bs-toggle='tooltip'
          data-bs-placement={player.id === '0' ? 'top' : 'bottom'}
          data-bs-title={player.id === '0' ? 'You' : getEnemyName(level)}
        >
          {/* Player avatar */}
          <img
            src={getAvatarForLevel(player.id, level)}
            alt='avatar'
            height={height}
            width={width}
          />

          {/* Image overlay for level effect */}
          {player.effects.some((e) => e.type === EffectType.freeze) && (
            <img src={icon.ice} alt='ice' className='overlay-ice' />
          )}

          {/* Animation overlay for card effect */}
          {showCardAnimation && (
            <img
              src={cardAnimationData?.path}
              alt={cardAnimationData?.type}
              className={`vfx-${cardAnimationData?.type}`}
            />
          )}
        </div>

        {/* Player stats (hp, atk, def) */}
        <div
          className='d-flex flex-column'
          onMouseEnter={() => setIsStatsIconsHovered(true)}
          onMouseLeave={() => setIsStatsIconsHovered(false)}
        >
          <div className='d-flex align-items-center mb-2'>
            <img src={icon.hp} className='me-2 pstats-icon' alt='hp' />
            <span className='fw-semibold pstats-text pstats-panel-width'>
              {player.hp} {isStatsIconsHovered && `/ ${player.maxHp}`}
            </span>
          </div>

          <div className='d-flex align-items-center mb-2'>
            <img src={icon.atk} className='me-2 pstats-icon' alt='atk' />
            <span
              className={`fw-semibold pstats-text ${
                player.atk < 0 ? 'text-danger' : ''
              }`}
            >
              {isStatsIconsHovered
                ? formatValueDisplay(player.atk, player.baseAtk)
                : player.atk}
            </span>
          </div>

          <div className='d-flex align-items-center'>
            <img src={icon.def} className='me-2 pstats-icon' alt='def' />
            <span
              className={`fw-semibold pstats-text ${
                player.def < 0 ? 'text-danger' : ''
              }`}
            >
              {isStatsIconsHovered
                ? formatValueDisplay(player.def, player.baseDef)
                : player.def}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsPanel;
