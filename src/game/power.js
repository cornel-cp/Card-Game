const PowerClass = {
  pyro: 'pyro',
  cryo: 'cryo',
  psammo: 'psammo',
  dentro: 'dentro',
  hydro: 'hydro',
  erebo: 'erebo',
};

// Difficulty of the boss level
const GameMode = {
  normal: 'normal',
  hard: 'hard',
};

// GameMode agnostic contants
const powerConfigs = {
  pyroHandDistribution: [0.4, 0.4, 0.1, 0.09, 0.01],
  cryoFreezeRate: 0.5,
  psammoWishRate: 0.4,
  hydroBuffRate: 0.5,
  hydroPlayerStatBuffPoint: 4,
};

// GameMode dependent contants
const powerModeConfigs = {
  [GameMode.normal]: {
    pyroMaxTurn: 40,
    psammoMissRate: 0.15,
    dentroEnemyHpBuffPoint: 20,
    hydroEnemyStatBuffPoint: 3,
    ereboPlayerInitialHp: 45,
  },
  [GameMode.hard]: {
    pyroMaxTurn: 30,
    psammoMissRate: 0.3,
    dentroEnemyHpBuffPoint: 40,
    hydroEnemyStatBuffPoint: 6,
    ereboPlayerInitialHp: 35,
  },
};

const getPowerConfigs = () => {
  const mode = sessionStorage.getItem('mode') || GameMode.normal;
  return {
    ...powerConfigs,
    ...powerModeConfigs[mode],
  };
};

export { PowerClass, GameMode, getPowerConfigs };
