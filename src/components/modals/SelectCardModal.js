import { cardFront } from '../utils/assetPaths';

const SelectCardModal = ({
  cardIdList,
  handleSelectCard,
  showSelectCardModal,
}) => {
  if (!showSelectCardModal) {
    return null;
  }

  return (
    <>
      <div
        className='modal fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-modal'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                Pick a Card
              </h4>
            </div>

            <div className='modal-body my-3'>
              <div className='d-flex justify-content-center gap-5'>
                {cardIdList.map((cardId, index) => (
                  <img
                    key={index}
                    src={cardFront(cardId)}
                    alt='card front'
                    className='img-fluid'
                    onClick={() => handleSelectCard(cardId)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default SelectCardModal;
