import { icon } from './utils/assetPaths';

const EffectStack = ({ opponentEffects, playerEffects, showEffectStack }) => {
  const sortEffects = (effects) => {
    // Sort by group first (buff then debuff), then name (group same non-unique effects together)
    return effects.sort((a, b) => {
      if (a.group === 'buff' && b.group === 'debuff') {
        return -1;
      } else if (a.group === 'debuff' && b.group === 'buff') {
        return 1;
      } else if (a.group === b.group) {
        if (a.text < b.text) {
          return -1;
        } else if (a.text > b.text) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 0; // Keep the original order if groups are the same but texts are different
      }
    });
  };

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
