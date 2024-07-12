const imgPrefix = 'images';
const cardPrefix = `${imgPrefix}/cards`;
const audioPrefix = 'audio';

const avatar = (playerId) => `${imgPrefix}/avatars/${playerId}.png`;
const icon = {
  hp: `${imgPrefix}/icons/hp.svg`,
  atk: `${imgPrefix}/icons/atk.svg`,
  def: `${imgPrefix}/icons/def.svg`,
};

const cardFront = (cardName) => `${cardPrefix}/front/${cardName}.png`;
const cardBack = (playerId) => `${cardPrefix}/back/${playerId}.png`;
const cardPlaceholder = (playerId) =>
  `${cardPrefix}/placeholder/${playerId}.png`;
const cardPile = `${cardPrefix}/pile.png`;

const cardAudio = (media) => `${audioPrefix}/${media}.ogg`;
const click = `${audioPrefix}/click.ogg`; 
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
  victory,
  defeat,
};
