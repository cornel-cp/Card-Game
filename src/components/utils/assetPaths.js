const IMG_PREFIX = 'images';

const getAvatarPath = (playerId) => {
  return `${IMG_PREFIX}/avatars/${playerId}.png`;
};
const ICON_PATHS = {
  hp: `${IMG_PREFIX}/icons/hp.svg`,
  atk: `${IMG_PREFIX}/icons/atk.svg`,
  def: `${IMG_PREFIX}/icons/def.svg`,
};

const CARD_PREFIX = `${IMG_PREFIX}/cards`;

const getCardFrontPath = (cardName) => {
  return `${CARD_PREFIX}/front/${cardName}.png`;
};
const getCardBackPath = (playerId) => {
  return `${CARD_PREFIX}/back/${playerId}.png`;
};
const getCardPlaceholderPath = (playerId) => {
  return `${CARD_PREFIX}/placeholder/${playerId}.png`;
};

const CARD_PILE_PATH = 'images/cards/pile.png';

export {
  getAvatarPath,
  ICON_PATHS,
  getCardFrontPath,
  getCardBackPath,
  getCardPlaceholderPath,
  CARD_PILE_PATH,
};
