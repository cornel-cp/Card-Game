import { icon } from './utils/assetPaths';

const IconList = () => {
  return (
    <div className='d-flex justify-content-end m-2'>
      <img src={icon.library} className='me-3' alt='library' />
      <img src={icon.instructions} className='me-3' alt='instructions' />
      <img src={icon.settings} alt='settings' />
    </div>
  );
};

export default IconList;
