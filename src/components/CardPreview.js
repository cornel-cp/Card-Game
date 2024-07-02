import Card from './Card';

const CardPreview = ({ cardName }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <Card type='PREVIEW' cardName={cardName} scale={1.25} />
    </div>
  );
};

export default CardPreview;
