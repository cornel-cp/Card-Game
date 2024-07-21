import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Client } from 'boardgame.io/react';
import { WizardDuel } from './game/game';
import MainMenu from './components/MainMenu';
import WizardDuelBoard from './components/WizardDuelBoard';

const WizardDuelClient = Client({
  game: WizardDuel,
  board: WizardDuelBoard,
  // Set to false for enabling debug panel
  debug: { collapseOnLoad: true, hideToggleButton: true },
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/game' element={<WizardDuelClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
