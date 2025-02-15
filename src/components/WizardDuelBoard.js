import { useEffect, useState } from 'react';

import useAudioPlayer from './hooks/useAudioPlayer';
import useMusicPlayer from './hooks/useMusicPlayer';
import useBsTooltip from './hooks/useBsTooltip';
import useLog from './hooks/useLog';
import { sleep } from './utils/utils';
import { GameState, pauseInterval } from './utils/constants';
import {
  cardAudio,
  click,
  victory,
  defeat,
  miss,
  defrost,
  getLocationForLevel,
  getMusicForLevel,
} from './utils/assetPaths';
import { random } from './utils/ai';
import { CardKeyword } from '../data/cards';
import { EffectType } from '../data/cardEffects';
import { DrawMode } from '../game/level';

import CardPile from './CardPile';
import CardPreview from './CardPreview';
import EffectStack from './EffectStack';
import EndTurnButton from './EndTurnButton';
import GameoverModal from './modals/GameoverModal';
import HelpModal from './modals/HelpModal';
import LevelEffectModal from './modals/LevelEffectModal';
import LogModal from './modals/LogModal';
import IconList from './IconList';
import MatchupModal from './modals/MatchupModal';
import NextLevelModal from './modals/NextLevelModal';
import PlayerHand from './PlayerHand';
import PlayerStats from './PlayerStats';
import SettingsModal from './modals/SettingsModal';
import SelectCardModal from './modals/SelectCardModal';

const WizardDuelBoard = ({ ctx, G, moves, events, reset }) => {
  // Initialize Bootstrap tooltips
  useBsTooltip();

  const [selectedCardToPlay, setSelectedCardToPlay] = useState(null);
  const [playerSelectedIndexToPlay, setPlayerSelectedIndexToPlay] =
    useState(null);
  const [gameState, setGameState] = useState(GameState.endTurnDisabled);
  const [winner, setWinner] = useState(null);
  const [showGameoverModal, setShowGameoverModal] = useState(false);
  const [showNextLevelModal, setShowNextLevelModal] = useState(false);
  const [showLevelEffectModal, setShowLevelEffectModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showMatchupModal, setShowMatchupModal] = useState(true);

  const [showSelectCardModal, setShowSelectCardModal] = useState(false);
  const [selectableCardsToDraw, setSelectableCardsToDraw] = useState([]);

  const { logEntries, addLogEntry } = useLog();
  const { playAudio, toggleAudioMute } = useAudioPlayer();
  const { playMusic, pauseMusic, toggleMusic } = useMusicPlayer(
    getMusicForLevel(G.level)
  );
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  /**
   * Plays the appropriate audio when a card is played.
   *  1. If the current player has an active `freeze` effect, play the `defrost` audio.
   *  2. If the played card contains the `damage` keyword and the current attack is set to miss, play the `miss` audio.
   *  3. In all other cases, play the default audio associated with the card.
   */
  const playCardAudio = (card) => {
    const hasFreezeEffect = G.players[ctx.currentPlayer].effects.some(
      (e) => e.type === EffectType.freeze
    );
    const hasDamageKeyword = card.keywords.includes(CardKeyword.damage);
    const shouldMissObj = G.globalEffects.find((e) => e.shouldMiss);

    if (hasFreezeEffect) {
      playAudio(defrost);
    } else if (hasDamageKeyword && shouldMissObj?.shouldMiss[ctx.turn - 1]) {
      playAudio(miss);
    } else {
      playAudio(cardAudio(card.id));
    }
  };

  const handleDrawCard = async () => {
    if (ctx.gameover) {
      return;
    }

    if (ctx.turn > 1) {
      await sleep(pauseInterval); // Preview card duration
      setSelectedCardToPlay(null);
      setPlayerSelectedIndexToPlay(null);
      await sleep(pauseInterval); // Interval between preview and draw
    }

    const drawModeObj = G.globalEffects.find((e) => e.drawMode);
    if (
      ctx.turn > 1 &&
      ctx.currentPlayer === '0' &&
      drawModeObj?.drawMode === DrawMode.select
    ) {
      setSelectableCardsToDraw(getSelectableCardIds());
      setShowSelectCardModal(true);
    } else {
      moves.drawCard();
    }

    if (ctx.turn > 1 && ctx.currentPlayer === '0') {
      setGameState(GameState.endTurnDisabled);
    }
  };

  const handleSelectCard = (cardId) => {
    setShowSelectCardModal(false);
    setSelectableCardsToDraw([]);
    moves.drawCard(cardId);
  };

  const getSelectableCardIds = () => {
    if (G.deck.length < 2) {
      throw new Error('Deck must have at least two cards.');
    }

    let firstIndex = Math.floor(Math.random() * G.deck.length);
    let secondIndex = Math.floor(Math.random() * G.deck.length);
    while (secondIndex === firstIndex) {
      secondIndex = Math.floor(Math.random() * G.deck.length);
    }
    return [G.deck[firstIndex].id, G.deck[secondIndex].id];
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

      const aiSelectedIndex = random();
      const aiSelectedCard = G.players[1].hand[aiSelectedIndex];
      setSelectedCardToPlay(aiSelectedCard);

      moves.playCard(aiSelectedIndex);
      playCardAudio(aiSelectedCard);
      addLogEntry(
        ctx.turn,
        G.players[1].name,
        aiSelectedCard.name,
        aiSelectedCard.text
      );
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
      pauseMusic();
      playAudio(ctx.gameover.winner === '0' ? victory : defeat);
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

  const handleCardClick = async (index) => {
    if (gameState !== GameState.aiTurn) {
      setSelectedCardToPlay(G.players[0].hand[index]);
      setPlayerSelectedIndexToPlay(index);
      playAudio(click);

      setGameState(GameState.endTurnEnabled);
    }
  };

  const handleEndTurnButtonClick = () => {
    if (gameState === GameState.endTurnEnabled) {
      moves.playCard(playerSelectedIndexToPlay);
      playCardAudio(selectedCardToPlay);
      addLogEntry(
        ctx.turn,
        G.players[0].name,
        G.players[0].hand[playerSelectedIndexToPlay].name,
        G.players[0].hand[playerSelectedIndexToPlay].text
      );

      setGameState(GameState.aiTurn);
    }
  };

  return (
    <div
      className='container-fluid vh-100 d-flex flex-column p-2 bg-board'
      style={{ '--bg-image': `url(/${getLocationForLevel(G.level)})` }}
    >
      <div className='row'>
        <div className='col-3'>
          <PlayerStats
            player={G.players[1]}
            level={G.level}
            setHoveredAvatar={setHoveredAvatar}
          />
        </div>

        <div className='col-6'>
          <PlayerHand player={G.players[1]} />
        </div>

        <div className='col-3'>
          <IconList
            setShowLevelEffectModal={setShowLevelEffectModal}
            setShowLogModal={setShowLogModal}
            setShowSettingsModal={setShowSettingsModal}
            setShowHelpModal={setShowHelpModal}
            playAudio={playAudio}
          />
        </div>
      </div>

      <div className='row flex-grow-1'>
        <div className='col-3'>
          <EffectStack
            opponentEffects={G.players[1].effects}
            playerEffects={G.players[0].effects}
            hoveredAvatar={hoveredAvatar}
          />
        </div>

        <div className='col-6'>
          <CardPreview selectedCard={selectedCardToPlay} />
        </div>

        <div className='col-3'>
          <CardPile />
        </div>
      </div>

      <div className='row align-items-end'>
        <div className='col-3'>
          <PlayerStats
            player={G.players[0]}
            setHoveredAvatar={setHoveredAvatar}
          />
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

      {/* Components rendered when the game starts */}
      <MatchupModal
        showMatchupModal={showMatchupModal}
        setShowMatchupModal={setShowMatchupModal}
        playMusic={playMusic}
        level={G.level}
      />

      {/* Components rendered on demand */}
      <GameoverModal
        showGameoverModal={showGameoverModal}
        setShowGameoverModal={setShowGameoverModal}
        setShowNextLevelModal={setShowNextLevelModal}
        winner={winner}
        playAudio={playAudio}
        level={G.level}
      />
      <NextLevelModal showNextLevelModal={showNextLevelModal} level={G.level} />
      <LevelEffectModal
        showLevelEffectModal={showLevelEffectModal}
        setShowLevelEffectModal={setShowLevelEffectModal}
        playAudio={playAudio}
        level={G.level}
      />
      <LogModal
        showLogModal={showLogModal}
        setShowLogModal={setShowLogModal}
        logEntries={logEntries}
        playAudio={playAudio}
      />
      <SettingsModal
        showSettingsModal={showSettingsModal}
        setShowSettingsModal={setShowSettingsModal}
        playAudio={playAudio}
        toggleAudioMute={toggleAudioMute}
        toggleMusic={toggleMusic}
      />
      <HelpModal
        showHelpModal={showHelpModal}
        setShowHelpModal={setShowHelpModal}
        playAudio={playAudio}
      />
      <SelectCardModal
        cardIdList={selectableCardsToDraw}
        handleSelectCard={handleSelectCard}
        showSelectCardModal={showSelectCardModal}
      />
    </div>
  );
};

export default WizardDuelBoard;
