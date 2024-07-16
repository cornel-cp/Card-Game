import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'bootstrap';
import './styles/styles.css';

import useAudioPlayer from './hooks/useAudioPlayer';
import { sleep } from './utils/utils';
import { GameState, pauseInterval } from './utils/constants';
import { cardAudio, click, victory, defeat } from './utils/assetPaths';

import CardPile from './CardPile';
import CardPreview from './CardPreview';
import EndTurnButton from './EndTurnButton';
import GameoverModal from './GameoverModal';
import IconList from './IconList';
import PlayerHand from './PlayerHand';
import PlayerStats from './PlayerStats';

const WizardDuelBoard = ({ ctx, G, moves, events, reset }) => {
  // const faceArray = [
  //   '/images/cards/front/0.svg',
  //   '/images/cards/front/1.svg',
  //   '/images/cards/front/2.svg',
  //   '/images/cards/front/3.svg',
  //   '/images/cards/front/4.svg',
  //   '/images/cards/front/5.svg',
  //   '/images/cards/front/6.svg',
  //   '/images/cards/front/7.svg',
  //   '/images/cards/front/8.svg',
  //   '/images/cards/front/9.svg',
  //   '/images/cards/front/10.svg',
  //   '/images/cards/front/11.svg',
  //   '/images/cards/front/12.svg',
  //   '/images/cards/front/13.svg',
  //   '/images/cards/front/14.svg',
  //   '/images/cards/front/15.svg',
  //   '/images/cards/front/16.svg',
  //   '/images/cards/front/17.svg',
  //   '/images/cards/front/18.svg',
  //   '/images/cards/front/19.svg',
  // ];
  // useEffect(() => {
  //   faceArray.forEach((face) => {
  //     const img = new Image();
  //     img.src = face;
  //   });
  // }, []);

  // Initialize Bootstrap tooltips
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);
  const [playerSelectedIndex, setPlayerSelectedIndex] = useState(null);
  const [gameState, setGameState] = useState(GameState.endTurnDisabled);
  const [showGameoverModal, setShowGameoverModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const { play } = useAudioPlayer();

  const handlePlaySoundEffect = (src) => {
    play(src);
  };

  const handleDrawCard = async () => {
    if (ctx.gameover) {
      return;
    }

    if (ctx.turn > 1) {
      await sleep(pauseInterval); // Preview card duration
      setSelectedCard(null);
      setPlayerSelectedIndex(null);
      await sleep(pauseInterval); // Interval between preview and draw
    }

    moves.drawCard();

    if (ctx.turn > 1 && ctx.currentPlayer === '0') {
      setGameState(GameState.endTurnDisabled);
    }
  };

  const handleAiPlayCard = async () => {
    if (ctx.gameover) {
      return;
    }

    if (ctx.currentPlayer === '1' && G.players[1].hand.length === 5) {
      // Interval between draw and play
      if (ctx.turn === 2) {
        await sleep(pauseInterval * 2); // x2 since AI does not draw in first turn
      } else {
        await sleep(pauseInterval);
      }

      const aiSelectedIndex = Math.floor(Math.random() * 5);
      const aiSelectedCard = G.players[1].hand[aiSelectedIndex];
      setSelectedCard(aiSelectedCard);

      moves.playCard(aiSelectedIndex);
      handlePlaySoundEffect(cardAudio(aiSelectedCard.id));
    }
  };

  const handleShowGameoverModal = async () => {
    if (ctx.gameover) {
      // Add a delay so that the modal does not pop up immediately after the end move
      await sleep(pauseInterval);
      if (ctx.gameover.winner !== null) {
        setWinner(ctx.gameover.winner);
      }
      setShowGameoverModal(true);
      handlePlaySoundEffect(ctx.gameover.winner === '0' ? victory : defeat);
    }
    // Not needed if game restart is implemented via a full page reload
    // else {
    //   setShowGameoverModal(false);
    // }
  };

  useEffect(() => {
    handleDrawCard();
  }, [ctx.currentPlayer, ctx.gameover]);

  useEffect(() => {
    handleAiPlayCard();
  }, [ctx.currentPlayer, G.players[1].hand, ctx.gameover]);

  useEffect(() => {
    handleShowGameoverModal();
  }, [ctx.gameover]);

  const handleRestart = () => {
    window.location.reload();
    // The alternative is to call reset() and clean up manual states on the client side
  };

  const handleCardClick = async (index) => {
    if (gameState !== GameState.aiTurn) {
      setSelectedCard(G.players[0].hand[index]);
      setPlayerSelectedIndex(index);
      handlePlaySoundEffect(click);

      setGameState(GameState.endTurnEnabled);
    }
  };

  const handleEndTurnButtonClick = () => {
    if (gameState === GameState.endTurnEnabled) {
      moves.playCard(playerSelectedIndex);
      handlePlaySoundEffect(cardAudio(selectedCard.id));

      setGameState(GameState.aiTurn);
    }
  };

  return (
    <div className='container-fluid vh-100 d-flex flex-column p-2 board-background'>
      <div className='row'>
        <div className='col-3'>
          <PlayerStats player={G.players[1]} />
        </div>

        <div className='col-6'>
          <PlayerHand player={G.players[1]} />
        </div>

        <div className='col-3'>
          <IconList />
        </div>
      </div>

      <div className='row flex-grow-1'>
        <div className='col-3'></div>

        <div className='col-6'>
          <CardPreview selectedCard={selectedCard} />
        </div>

        <div className='col-3'>
          <CardPile />
        </div>
      </div>

      <div className='row align-items-end'>
        <div className='col-3'>
          <PlayerStats player={G.players[0]} />
        </div>

        <div className='col-6'>
          <PlayerHand player={G.players[0]} handleCardClick={handleCardClick} />
        </div>

        <div className='col-3'>
          <EndTurnButton
            gameState={gameState}
            handleEndTurnButtonClick={handleEndTurnButtonClick}
          />
        </div>
      </div>

      <GameoverModal
        showGameoverModal={showGameoverModal}
        winner={winner}
        handleRestart={handleRestart}
      />
    </div>
  );
};

export default WizardDuelBoard;
