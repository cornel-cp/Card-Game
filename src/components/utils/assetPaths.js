const imgPrefix = 'images';
const cardPrefix = `${imgPrefix}/cards`;
const audioPrefix = 'audio';

const avatar = (playerId) => `${imgPrefix}/avatars/${playerId}.png`;
const icon = {
  hp: `${imgPrefix}/icons/hp.svg`,
  atk: `${imgPrefix}/icons/atk.svg`,
  def: `${imgPrefix}/icons/def.svg`,
};

const cardFront = (cardId) => `${cardPrefix}/front/${cardId}.svg`;
const cardBack = (playerId) => `${cardPrefix}/back/${playerId}.png`;
const cardPlaceholder = (playerId) =>
  `${cardPrefix}/placeholder/${playerId}.png`;
const cardPile = `${cardPrefix}/pile.png`;

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
const draw = `${audioPrefix}/draw.ogg`;
const victory = `${audioPrefix}/victory.ogg`;
const defeat = `${audioPrefix}/defeat.ogg`;

export {
  // IMAGES
  avatar,
  icon,
  cardFront,
  cardBack,
  cardPlaceholder,
  cardPile,

  // AUDIO
  cardAudio,
  click,
  draw,
  victory,
  defeat,
};
