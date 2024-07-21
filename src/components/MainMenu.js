const MainMenu = () => {
  return (
    <div className='d-flex flex-column bg-menu vh-100 justify-content-center align-items-center'>
      <p className='font-cinzel-semibold menu-title-fs mb-5'>Wizard Duel</p>
      <div className='d-flex flex-column mt-5'>
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Play
        </button>
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Instructions
        </button>
        <button className='btn btn-dark btn-lg menu-btn-width mb-3'>
          Cards
        </button>
        <button className='btn btn-dark btn-lg menu-btn-width'>About</button>
      </div>
    </div>
  );
};

export default MainMenu;
