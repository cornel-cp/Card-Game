import { sortEffects } from './utils/utils';
import { icon } from './utils/assetPaths';

const EffectStack = ({ opponentEffects, playerEffects, hoveredAvatar }) => {
  return (
    <div className='d-flex flex-column h-100 justify-content-between'>
      {/* Opponent effect stack */}
      <div className='fxstack-mb'>
        <ul className='list-group'>
          {hoveredAvatar === '1'
            ? opponentEffects.length === 0
              ? ' No Effect'
              : sortEffects([...opponentEffects]).map((effect, index) => (
                  <li
                    key={index}
                    className='list-group-item bg-transparent p-0 border-0'
                  >
                    {effect.text && effect.group ? (
                      <>
                        <img
                          src={icon[effect.group]}
                          className='me-2 mb-1'
                          alt='effect'
                        />
                        <span>{effect.text}</span>
                      </>
                    ) : null}
                  </li>
                ))
            : null}
        </ul>
      </div>

      {/* Player effect stack */}
      <div className='fxstack-mt'>
        <ul className='list-group'>
          {hoveredAvatar === '0'
            ? playerEffects.length === 0
              ? ' No Effect'
              : sortEffects([...playerEffects]).map((effect, index) => (
                  <li
                    key={index}
                    className='list-group-item bg-transparent p-0 border-0'
                  >
                    {effect.text && effect.group ? (
                      <>
                        <img
                          src={icon[effect.group]}
                          className='me-2 mb-1'
                          alt='effect'
                        />
                        <span>{effect.text}</span>
                      </>
                    ) : null}
                  </li>
                ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default EffectStack;
