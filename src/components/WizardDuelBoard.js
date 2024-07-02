import { useEffect, useState } from 'react';
import CardPile from './CardPile';
import CardPreview from './CardPreview';
import EndTurnButton from './EndTurnButton';
import PlayerHand from './PlayerHand';
import PlayerInfo from './PlayerInfo';
import { BattleState } from './constants';

const WizardDuelBoard = ({ ctx, G, moves, events }) => {
  // console.log(JSON.stringify(props));
  // console.log(props.moves);

  const [selectedCard, setSelectedCard] = useState(null);
  const [playerSelectedIndex, setPlayerSelectedIndex] = useState(null);

  const [battleState, setBattleState] = useState(BattleState.END_TURN_DISABLED);

  useEffect(() => {
    const handleDrawCard = async () => {
      await sleep(1000);
      setSelectedCard(null);
      setPlayerSelectedIndex(null);
      await sleep(1000);
      moves.drawCard();

      if (ctx.currentPlayer === '0') {
        setBattleState(BattleState.END_TURN_DISABLED);
      }
    };

    handleDrawCard();
  }, [ctx.currentPlayer]);

  useEffect(() => {
    const handleAiPlayCard = async () => {
      if (ctx.currentPlayer === '1' && G.players[1].hand.length === 5) {
        if (ctx.turn <= 2) {
          await sleep(2000);
        } else {
          await sleep(1000);
        }
        const aiSelectedIndex = Math.floor(Math.random() * 5);
        setSelectedCard(G.players[1].hand[aiSelectedIndex]);
        moves.playCard(aiSelectedIndex);
      }
    };

    handleAiPlayCard();
  }, [ctx.currentPlayer, G.players[1].hand]);

  // TODO: Track the state of ctx.gameover to render end game screen

  const handleCardClick = async (index) => {
    if (battleState !== BattleState.AI_TURN) {
      setSelectedCard(G.players[0].hand[index]);
      setPlayerSelectedIndex(index);
      setBattleState(BattleState.END_TURN_ENABLED);
    }
  };

  const handleButtonClick = () => {
    if (battleState === BattleState.END_TURN_ENABLED) {
      moves.playCard(playerSelectedIndex);
      setBattleState(BattleState.AI_TURN);
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className='container-fluid vh-100 d-flex flex-column'>
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
        <div className='col-8'>
          {selectedCard === null ? (
            ''
          ) : (
            <CardPreview cardName={selectedCard.name} />
          )}
        </div>
        <div className='col-2'>
          <CardPile />
        </div>
      </div>

      <div className='row align-items-end bg-info'>
        <div className='col-2'>
          <PlayerInfo player={G.players[0]} />
        </div>
        <div className='col-8'>
          <PlayerHand player={G.players[0]} handleCardClick={handleCardClick} />
        </div>
        <div className='col-2'>
          <EndTurnButton
            battleState={battleState}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default WizardDuelBoard;
