import { useEffect, useState } from 'react';
import CardPile from './CardPile';
import CardPreview from './CardPreview';
import EndTurnButton from './EndTurnButton';
import GameEndModal from './GameEndModal';
import PlayerHand from './PlayerHand';
import PlayerInfo from './PlayerInfo';
import { sleep } from './utils/utils';
import {
  BattleState,
  SHORT_INTERVAL,
  MEDIUM_INTERVAL,
} from './utils/constants';
import './styles/styles.css';

const WizardDuelBoard = ({ ctx, G, moves, events, reset }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [playerSelectedIndex, setPlayerSelectedIndex] = useState(null);

  const [battleState, setBattleState] = useState(BattleState.END_TURN_DISABLED);

  const [showGameEndModal, setShowGameEndModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleDrawCard = async () => {
    if (ctx.gameover) {
      return;
    }

    if (ctx.turn > 1) {
      await sleep(SHORT_INTERVAL); // Preview card duration
      setSelectedCard(null);
      setPlayerSelectedIndex(null);
      await sleep(SHORT_INTERVAL); // Interval between preview and draw
    }

    moves.drawCard();

    if (ctx.turn > 1 && ctx.currentPlayer === '0') {
      setBattleState(BattleState.END_TURN_DISABLED);
    }
  };

  const handleAiPlayCard = async () => {
    if (ctx.gameover) {
      return;
    }

    if (ctx.currentPlayer === '1' && G.players[1].hand.length === 5) {
      // Interval between draw and play
      if (ctx.turn === 2) {
        await sleep(MEDIUM_INTERVAL); // x2 since AI does not draw in first turn
      } else {
        await sleep(SHORT_INTERVAL);
      }

      const aiSelectedIndex = Math.floor(Math.random() * 5);
      setSelectedCard(G.players[1].hand[aiSelectedIndex]);

      moves.playCard(aiSelectedIndex);
    }
  };

  const handleShowGameEndModal = async () => {
    if (ctx.gameover) {
      // Add a delay so that the modal does not pop up immediately after the end move
      await sleep(SHORT_INTERVAL);
      if (ctx.gameover.winner !== null) {
        setWinner(ctx.gameover.winner);
      }
      setShowGameEndModal(true);
    }
    // Not needed if game restart is implemented via a full page reload
    // else {
    //   setShowGameEndModal(false);
    // }
  };

  useEffect(() => {
    handleDrawCard();
  }, [ctx.currentPlayer, ctx.gameover]);

  useEffect(() => {
    handleAiPlayCard();
  }, [ctx.currentPlayer, G.players[1].hand, ctx.gameover]);

  useEffect(() => {
    handleShowGameEndModal();
  }, [ctx.gameover]);

  const handleRestart = () => {
    window.location.reload();
    // The alternative is to call reset() and clean up manual states on the client side
  };

  const handleCardClick = async (index) => {
    if (battleState !== BattleState.AI_TURN) {
      setSelectedCard(G.players[0].hand[index]);
      setPlayerSelectedIndex(index);

      setBattleState(BattleState.END_TURN_ENABLED);
    }
  };

  const handleEndTurnButtonClick = () => {
    if (battleState === BattleState.END_TURN_ENABLED) {
      moves.playCard(playerSelectedIndex);

      setBattleState(BattleState.AI_TURN);
    }
  };

  return (
    <div className='container-fluid vh-100 d-flex flex-column p-2 board-background'>
      <div className='row'>
        <div className='col-2'>
          <PlayerInfo player={G.players[1]} />
        </div>
        <div className='col-8'>
          <PlayerHand player={G.players[1]} />
        </div>
        <div className='col-2'></div>
      </div>

      <div className='row flex-grow-1'>
        <div className='col-2'></div>
        <div className='col-8'>
          <CardPreview selectedCard={selectedCard} />
        </div>
        <div className='col-2'>
          <CardPile />
        </div>
      </div>

      <div className='row align-items-end'>
        <div className='col-2'>
          <PlayerInfo player={G.players[0]} />
        </div>
        <div className='col-8'>
          <PlayerHand player={G.players[0]} handleCardClick={handleCardClick} />
        </div>
        <div className='col-2'>
          <EndTurnButton
            battleState={battleState}
            handleEndTurnButtonClick={handleEndTurnButtonClick}
          />
        </div>
      </div>

      <GameEndModal
        showGameEndModal={showGameEndModal}
        winner={winner}
        handleRestart={handleRestart}
      />
    </div>
  );
};

export default WizardDuelBoard;
