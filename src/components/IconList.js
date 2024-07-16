import { icon } from './utils/assetPaths';

const IconList = () => {
  return (
    <div className='d-flex justify-content-end m-2'>
      <img
        src={icon.log}
        className='me-3'
        alt='log'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Battle log'
      />
      <img
        src={icon.settings}
        className='me-3'
        alt='settings'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Settings'
      />
      <img
        src={icon.help}
        alt='help'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Help'
      />
    </div>
  );
};

export default IconList;
