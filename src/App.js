import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Client } from 'boardgame.io/react';
import { WizardDuel } from './game/game';
import WizardDuelBoard from './components/WizardDuelBoard';
import PlayerInfo from './components/PlayerInfo';
import PlayerHand from './components/PlayerHand';
import Card from './components/Card';

const WizardDuelClient = Client({ game: WizardDuel, board: WizardDuelBoard });

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={<WizardDuelClient />} />

        {/* for testing */}
        <Route path='/info' element={<PlayerInfo />} />
        <Route path='/hand' element={<PlayerHand />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
