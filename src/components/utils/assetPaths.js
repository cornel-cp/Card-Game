const imgPrefix = 'images';
const cardPrefix = `${imgPrefix}/cards`;
const audioPrefix = 'audio';

const avatar = (playerId) => `${imgPrefix}/avatars/${playerId}.svg`;
const icon = {
  hp: `${imgPrefix}/icons/hp.svg`,
  atk: `${imgPrefix}/icons/atk.svg`,
  def: `${imgPrefix}/icons/def.svg`,
  settings: `${imgPrefix}/icons/settings.svg`,
  library: `${imgPrefix}/icons/library.svg`,
  help: `${imgPrefix}/icons/help.svg`,
};

const cardFront = (cardId) => `${cardPrefix}/front/${cardId}.svg`;
const cardBack = (playerId) => `${cardPrefix}/back/${playerId}.svg`;
const cardPlaceholder = (playerId) =>
  `${cardPrefix}/placeholder/${playerId}.svg`;
const cardPile = `${cardPrefix}/pile.svg`;
const cardFronts = Array.from(
  { length: 20 },
  (_, cardId) => `${cardPrefix}/front/${cardId}.svg`
);

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
};
const cardAudio = (cardId) => `${audioPrefix}/${cardAudioType[cardId]}.ogg`;
const click = `${audioPrefix}/click.ogg`;
const victory = `${audioPrefix}/victory.ogg`;
const defeat = `${audioPrefix}/defeat.ogg`;
const audio = [
  `${audioPrefix}/fireball.ogg`,
  `${audioPrefix}/freeze.ogg`,
  `${audioPrefix}/thunder.ogg`,
  `${audioPrefix}/heal.ogg`,
  `${audioPrefix}/sword.ogg`,
  `${audioPrefix}/shield.ogg`,
  `${audioPrefix}/weaken.ogg`,
  `${audioPrefix}/magic.ogg`,
  `${audioPrefix}/click.ogg`,
  `${audioPrefix}/victory.ogg`,
  `${audioPrefix}/defeat.ogg`,
];

export {
  // IMAGES
  avatar,
  icon,
  cardFront,
  cardBack,
  cardPlaceholder,
  cardPile,
  cardFronts,

  // AUDIO
  cardAudio,
  click,
  victory,
  defeat,
  audio,
};
