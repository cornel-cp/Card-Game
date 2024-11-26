import { click } from '../utils/assetPaths';
import useImageLoader from '../hooks/useImageLoader';

const CardGalleryModal = ({
  showCardGallery,
  setShowCardGallery,
  cardImages,
  playAudio,
}) => {
  const { isLoading } = useImageLoader(cardImages, 1000);

  if (!showCardGallery) {
    return null;
  }

  const handleCardGalleryClose = () => {
    setShowCardGallery(false);
    playAudio(click);
  };

  return (
    <>
      <div
        className='modal modal-lg fade show d-block'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
          <div className='modal-content bg-modal h-100'>
            <div className='modal-header border-0'>
              <h4 className='modal-title w-100 text-center font-lora-bold'>
                Card Gallery
              </h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleCardGalleryClose}
              ></button>
            </div>

            <div className='modal-body'>
              {isLoading ? (
                <div className='d-flex justify-content-center align-items-center h-75'>
                  <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                </div>
              ) : (
                <div className='container'>
                  <div className='row row-cols-5 g-3'>
                    {cardImages.map((image, index) => (
                      <div className='col' key={index}>
                        <img
                          src={image}
                          alt='card front'
                          className='img-fluid'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </>
  );
};

export default CardGalleryModal;
