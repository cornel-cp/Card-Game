import { Client } from "boardgame.io/react";
import { WizardDuel } from "./game/game";

const App = Client({ game: WizardDuel });

export default App;
