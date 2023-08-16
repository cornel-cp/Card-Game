import { Client } from "boardgame.io/react";
import { WizardDuel } from "./gameLogic";

const App = Client({ game: WizardDuel });

export default App;
