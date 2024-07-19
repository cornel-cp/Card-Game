import { icon } from './utils/assetPaths';

const IconList = ({ setShowLogModal, setShowHelpModal }) => {
  return (
    <div className='d-flex justify-content-end m-2'>
      <img
        src={icon.log}
        className='me-3 icon'
        alt='log'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Battle log'
        onClick={() => setShowLogModal(true)}
      />
      {/* <img
        src={icon.settings}
        className='me-3 icon'
        alt='settings'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Settings'
      /> */}
      <img
        src={icon.help}
        className='icon'
        alt='help'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-title='Help'
        onClick={() => setShowHelpModal(true)}
      />
    </div>
  );
};

export default IconList;
