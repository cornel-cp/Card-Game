import { sortEffects } from './utils/utils';
import { icon } from './utils/assetPaths';

const EffectStack = ({ opponentEffects, playerEffects, showEffectStack }) => {
  return (
    showEffectStack && (
      <div className='d-flex flex-column h-100 justify-content-between'>
        {/* Opponent effect stack */}
        <div className='fxstack-mb'>
          <ul className='list-group'>
            {sortEffects([...opponentEffects]).map((effect, index) => (
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
            ))}
          </ul>
        </div>

        {/* Player effect stack */}
        <div className='fxstack-mt'>
          <ul className='list-group'>
            {sortEffects([...playerEffects]).map((effect, index) => (
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
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default EffectStack;
