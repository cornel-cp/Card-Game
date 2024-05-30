import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client } from "boardgame.io/react";
import { WizardDuel } from "./game/game";
import WizardDuelBoard from "./components/WizardDuelBoard";
import Card from "./components/Card";
import PlayerInfo from "./components/PlayerInfo";

const WizardDuelClient = Client({ game: WizardDuel, board: WizardDuelBoard });

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<WizardDuelClient />} />

        {/* for testing */}
        <Route path="/" element={<PlayerInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
