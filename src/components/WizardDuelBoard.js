import { useEffect } from 'react';
import PlayerHand from './PlayerHand';
import PlayerInfo from './PlayerInfo';

const WizardDuelBoard = ({ ctx, G, moves, events }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  useEffect(() => {
    const handleDrawCard = async () => {
      await sleep(2000);
      moves.drawCard();
      await sleep(2000);
    };

    handleDrawCard();
  }, [ctx.currentPlayer]);

  useEffect(() => {
    const handleAiPlayCard = async () => {
      await sleep(2000);
      if (ctx.currentPlayer === '1' && G.players[1].hand.length === 5) {
        moves.playCard(G.players[1].hand[Math.floor(Math.random() * 5)]);
        // moves.playCard(G.players[1].hand[0]);
        // TODO: Preview the played card at center of the board
      }
    };

    handleAiPlayCard();
  }, [ctx.currentPlayer, G.players[1].hand]);

  // TODO: Track the state of ctx.gameover to render end game screen

  const handleCardClick = async (card) => {
    moves.playCard(card);
    // TODO: Preview the played card at center of the board
  };

  // const handleEndTurn = () => {
  //   if (ctx.currentPlayer === '0') {
  //     // TODO: Render error notification
  //     alert(
  //       "Your turn hasn't ended yet, please make a move before clicking end turn"
  //     );
  //     return;
  //   }
  // };

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
          <PlayerHand player={G.players[1]} />
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
        <div className='col-2'>
          Column
          {/* <button className='btn btn-primary' onClick={handleEndTurn}>
            End Turn
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WizardDuelBoard;
