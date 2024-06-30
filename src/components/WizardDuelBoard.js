import PlayerHand from './PlayerHand';
import PlayerInfo from './PlayerInfo';

const WizardDuelBoard = ({ ctx, G, moves }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  const handleCardClick = async (card) => {
    // Check if currentPlayer is same as card owner

    // Player turn
    moves.playCard(card);

    // TODO: Preview the played card at center of the board

    // // Sleep
    // await sleep(2000);

    // // AI turn if game does not end yet
    // moves.playCard(card);

    // TODO: Preview the played card at center of the board

    // // Sleep
    // await sleep(2000);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className='container-fluid vh-100 d-flex flex-column bg-primary'>
      <div className='row bg-success'>
        <div className='col-2'>
          <PlayerInfo player={G.players[1]} />
        </div>
        <div className='col-8'>
          <PlayerHand player={G.players[1]} handleCardClick={handleCardClick} />
        </div>
        <div className='col-2'>Column</div>
      </div>

      <div className='row flex-grow-1 bg-warning'>
        <div className='col-2'>Column</div>
        <div className='col-8'>Column</div>
        <div className='col-2'>Column</div>
      </div>

      <div className='row align-items-end bg-info'>
        <div className='col-2'>
          <PlayerInfo player={G.players[0]} />
        </div>
        <div className='col-8'>
          <PlayerHand player={G.players[0]} handleCardClick={handleCardClick} />
        </div>
        <div className='col-2'>Column</div>
      </div>
    </div>
  );
};

export default WizardDuelBoard;
