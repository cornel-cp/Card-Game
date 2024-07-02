import Card from './Card';

const CardPreview = ({ cardName }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <Card type='PREVIEW' cardName={cardName} height='315px' width='225px' />
    </div>
  );
};

export default CardPreview;
