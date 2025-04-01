import { AnimationTarget } from './constants';

const imgPrefix = 'images';
const avatarPrefix = `${imgPrefix}/avatars`;
const cardPrefix = `${imgPrefix}/cards`;
const locationPrefix = `${imgPrefix}/locations`;
const animationPrefix = 'animations';
const audioPrefix = 'audio';
const musicPrefix = 'music';

// IMAGES FILES

const avatarPaths = {
  0: `${avatarPrefix}/player.svg`,
  1: `${avatarPrefix}/wise-scholar.svg`,
  2: `${avatarPrefix}/wild-firemancer.svg`,
  3: `${avatarPrefix}/ice-queen.svg`,
  4: `${avatarPrefix}/traveling-merchant.svg`,
  5: `${avatarPrefix}/forest-ranger.svg`,
  6: `${avatarPrefix}/murloc-oracle.svg`,
  7: `${avatarPrefix}/crimson-witch.svg`,
  8: `${avatarPrefix}/dark-knight.svg`,
};
const getAvatarForLevel = (playerId, level = '1') => {
  return playerId === '0' ? avatarPaths[0] : avatarPaths[level];
};

const locationPaths = {
  1: `${locationPrefix}/city.svg`,
  2: `${locationPrefix}/volcano.svg`,
  3: `${locationPrefix}/snow-mountain.svg`,
  4: `${locationPrefix}/desert.svg`,
  5: `${locationPrefix}/forest.svg`,
  6: `${locationPrefix}/ocean.svg`,
  7: `${locationPrefix}/marsh.svg`,
  8: `${locationPrefix}/castle.svg`,
};
const getLocationForLevel = (level = '1') => locationPaths[level];

const icon = {
  hp: `${imgPrefix}/icons/hp.svg`,
  atk: `${imgPrefix}/icons/atk.svg`,
  def: `${imgPrefix}/icons/def.svg`,
  effect: `${imgPrefix}/icons/effect.svg`,
  log: `${imgPrefix}/icons/log.svg`,
  settings: `${imgPrefix}/icons/settings.svg`,
  help: `${imgPrefix}/icons/help.svg`,
  buff: `${imgPrefix}/icons/buff.svg`,
  debuff: `${imgPrefix}/icons/debuff.svg`,
  ice: `${imgPrefix}/icons/ice.svg`,
  level: `${imgPrefix}/icons/level.svg`,
  turn: `${imgPrefix}/icons/turn.svg`,
  deck: `${imgPrefix}/icons/deck.svg`,
};

const cardFront = (cardId) => `${cardPrefix}/front/${cardId}.svg`;
const cardBack = (playerId) => `${cardPrefix}/back/${playerId}.svg`;
const cardPlaceholder = (playerId) =>
  `${cardPrefix}/placeholder/${playerId}.svg`;
const cardPile = `${cardPrefix}/pile.svg`;

const cardCount = 36; // Increment this when new cards are added
const cardFronts = Array.from(
  { length: cardCount },
  (_, cardId) => `${cardPrefix}/front/${cardId}.svg`
);

const nextLevelCards = {
  1: [cardFront('20'), cardFront('21')],
  2: [cardFront('22'), cardFront('23')],
  3: [cardFront('24'), cardFront('25')],
  4: [cardFront('30'), cardFront('31')],
  5: [cardFront('32'), cardFront('33')],
  6: [cardFront('34'), cardFront('35')],
  7: [],
};
const getNextCardsForLevel = (level = '1') => nextLevelCards[level];

// ANIMATION FILES

const getAnimationPath = (type) => `${animationPrefix}/${type}.gif`;
const animationData = {
  fireball: {
    type: 'fireball',
    path: getAnimationPath('fireball'),
    timeout: 500,
  },
  freeze: {
    type: 'freeze',
    path: getAnimationPath('freeze'),
    timeout: 1000,
  },
  thunder: {
    type: 'thunder',
    path: getAnimationPath('thunder'),
    timeout: 1000,
  },
  heal: {
    type: 'heal',
    path: getAnimationPath('heal'),
    timeout: 500,
  },
  sword: {
    type: 'sword',
    path: getAnimationPath('sword'),
    timeout: 1000,
  },
  shield: {
    type: 'shield',
    path: getAnimationPath('shield'),
    timeout: 1200,
  },
  'ghost-bounce': {
    type: 'ghost-bounce',
    path: getAnimationPath('ghost-bounce'),
    timeout: 1200,
  },
  skull: {
    type: 'skull',
    path: getAnimationPath('skull'),
    timeout: 1800,
  },
  hammer: {
    type: 'hammer',
    path: getAnimationPath('hammer'),
    timeout: 1000,
  },
  'blood-strike': {
    type: 'blood-strike',
    path: getAnimationPath('blood-strike'),
    timeout: 1000,
  },
  'blood-burst': {
    type: 'blood-burst',
    path: getAnimationPath('blood-burst'),
    timeout: 1000,
  },
  'star-bounce': {
    type: 'star-bounce',
    path: getAnimationPath('star-bounce'),
    timeout: 1200,
  },
  'star-strike': {
    type: 'star-strike',
    path: getAnimationPath('star-strike'),
    timeout: 1000,
  },
  'star-impact': {
    type: 'star-impact',
    path: getAnimationPath('star-impact'),
    timeout: 600,
  },
  'slime-swirl': {
    type: 'slime-swirl',
    path: getAnimationPath('slime-swirl'),
    timeout: 1000,
  },
  'slime-strike': {
    type: 'slime-strike',
    path: getAnimationPath('slime-strike'),
    timeout: 600,
  },
  'water-explode': {
    type: 'water-explode',
    path: getAnimationPath('water-explode'),
    timeout: 800,
  },
  'blood-cross-strike': {
    type: 'blood-cross-strike',
    path: getAnimationPath('blood-cross-strike'),
    timeout: 800,
  },
  'slime-splash': {
    type: 'slime-splash',
    path: getAnimationPath('slime-splash'),
    timeout: 500,
  },
};
const cardAnimation = {
  0: {
    type: 'fireball',
    target: AnimationTarget.enemy,
  },
  1: {
    type: 'fireball',
    target: AnimationTarget.enemy,
  },
  2: {
    type: 'fireball',
    target: AnimationTarget.enemy,
  },
  3: {
    type: 'freeze',
    target: AnimationTarget.enemy,
  },
  4: {
    type: 'freeze',
    target: AnimationTarget.enemy,
  },
  5: {
    type: 'freeze',
    target: AnimationTarget.enemy,
  },
  6: {
    type: 'thunder',
    target: AnimationTarget.enemy,
  },
  7: {
    type: 'thunder',
    target: AnimationTarget.enemy,
  },
  8: {
    type: 'thunder',
    target: AnimationTarget.enemy,
  },
  9: {
    type: 'heal',
    target: AnimationTarget.self,
  },
  10: {
    type: 'heal',
    target: AnimationTarget.self,
  },
  11: {
    type: 'heal',
    target: AnimationTarget.self,
  },
  12: {
    type: 'sword',
    target: AnimationTarget.self,
  },
  13: {
    type: 'shield',
    target: AnimationTarget.self,
  },
  14: {
    type: 'ghost-bounce',
    target: AnimationTarget.enemy,
  },
  15: {
    type: 'skull',
    target: AnimationTarget.enemy,
  },
  16: {
    type: 'hammer',
    target: AnimationTarget.self,
  },
  17: {
    type: 'blood-strike',
    target: AnimationTarget.enemy,
  },
  18: {
    type: 'sword',
    target: AnimationTarget.self,
  },
  19: {
    type: 'shield',
    target: AnimationTarget.self,
  },
  20: {
    type: 'fireball',
    target: AnimationTarget.enemy,
  },
  21: {
    type: 'blood-burst',
    target: AnimationTarget.self,
  },
  22: {
    type: 'freeze',
    target: AnimationTarget.enemy,
  },
  23: {
    type: 'heal',
    target: AnimationTarget.self,
  },
  24: null,
  25: null,
  26: {
    type: 'star-bounce',
    target: AnimationTarget.enemy,
  },
  27: {
    type: 'star-strike',
    target: AnimationTarget.self,
  },
  28: {
    type: 'star-bounce',
    target: AnimationTarget.self,
  },
  29: {
    type: 'star-impact',
    target: AnimationTarget.enemy,
  },
  30: {
    type: 'slime-swirl',
    target: AnimationTarget.both,
  },
  31: {
    type: 'slime-strike',
    target: AnimationTarget.enemy,
  },
  32: null,
  33: {
    type: 'water-explode',
    target: AnimationTarget.enemy,
  },
  34: {
    type: 'blood-cross-strike',
    target: AnimationTarget.self,
  },
  35: {
    type: 'slime-splash',
    target: AnimationTarget.enemy,
  },
};
const getAnimationDataForCard = (cardId) =>
  animationData[cardAnimation[cardId]?.type];
// Same animation can be reused to different targets, hence separating it from animationData object
const getAnimationTargetForCard = (cardId) => cardAnimation[cardId]?.target;

// AUDIO FILES

const cardAudioType = {
  0: 'fireball',
  1: 'fireball',
  2: 'fireball',
  3: 'freeze',
  4: 'freeze',
  5: 'freeze',
  6: 'thunder',
  7: 'thunder',
  8: 'thunder',
  9: 'heal',
  10: 'heal',
  11: 'heal',
  12: 'sword',
  13: 'shield',
  14: 'weaken',
  15: 'weaken',
  16: 'magic',
  17: 'magic',
  18: 'sword',
  19: 'shield',
  20: 'fireball',
  21: 'magic',
  22: 'freeze',
  23: 'heal',
  24: 'wind',
  25: 'magic',
  26: 'freeze',
  27: 'sword',
  28: 'heal',
  29: 'fireball',
  30: 'heal',
  31: 'arrow',
  32: 'waves',
  33: 'waves',
  34: 'roar',
  35: 'potion',
};
const cardAudio = (cardId) => `${audioPrefix}/${cardAudioType[cardId]}.mp3`;
const click = `${audioPrefix}/click.mp3`;
const victory = `${audioPrefix}/victory.mp3`;
const defeat = `${audioPrefix}/defeat.mp3`;
const miss = `${audioPrefix}/wind.mp3`; // reuse the wind sound effect
const defrost = `${audioPrefix}/freeze.mp3`; // reuse the freeze sound effect
const cleanse = `${audioPrefix}/waves.mp3`; // reuse the waves sound effect
const potion = `${audioPrefix}/potion.mp3`; // reuse the potion sound effect

// MUSIC FILES

const musicPaths = {
  1: `${musicPrefix}/royal-city.mp3`,
  2: `${musicPrefix}/lava-plains.mp3`,
  3: `${musicPrefix}/ice-crown.mp3`,
  4: `${musicPrefix}/lost-desert.mp3`,
  5: `${musicPrefix}/misty-woods.mp3`,
  6: `${musicPrefix}/coral-bay.mp3`,
  7: `${musicPrefix}/shadow-swamp.mp3`,
  8: `${musicPrefix}/black-castle.mp3`,
};
const getMusicForLevel = (level = '1') => musicPaths[level];

// ALL FILES FOR PRELOAD

const IMAGES = [
  ...Object.values(avatarPaths),
  ...Object.values(locationPaths),
  ...Object.values(icon),
  ...cardFronts,
  `${cardPrefix}/back/0.svg`,
  `${cardPrefix}/back/1.svg`,
  `${cardPrefix}/placeholder/0.svg`,
  `${cardPrefix}/placeholder/1.svg`,
  cardPile,
];
const ANIMATION = Object.values(animationData).map((data) => data.path);
const AUDIO = [
  click,
  victory,
  defeat,
  `${audioPrefix}/fireball.mp3`,
  `${audioPrefix}/freeze.mp3`,
  `${audioPrefix}/thunder.mp3`,
  `${audioPrefix}/heal.mp3`,
  `${audioPrefix}/sword.mp3`,
  `${audioPrefix}/shield.mp3`,
  `${audioPrefix}/weaken.mp3`,
  `${audioPrefix}/magic.mp3`,
  `${audioPrefix}/wind.mp3`,
  `${audioPrefix}/arrow.mp3`,
  `${audioPrefix}/waves.mp3`,
  `${audioPrefix}/roar.mp3`,
  `${audioPrefix}/potion.mp3`,
];
const MUSIC = [...Object.values(musicPaths)];

export {
  // IMAGES FILES
  getAvatarForLevel,
  getLocationForLevel,
  getNextCardsForLevel,
  icon,
  cardFront,
  cardBack,
  cardPlaceholder,
  cardPile,
  cardFronts,

  // ANIMATION FILES
  getAnimationDataForCard,
  getAnimationTargetForCard,

  // AUDIO FILES
  cardAudio,
  click,
  victory,
  defeat,
  miss,
  defrost,
  cleanse,
  potion,

  // MUSIC FILES
  getMusicForLevel,

  // ALL FILES FOR PRELOAD
  IMAGES,
  ANIMATION,
  AUDIO,
  MUSIC,
};
