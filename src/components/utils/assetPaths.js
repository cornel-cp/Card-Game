export const IMG_PREFIX = 'images';

export const getAvatarPath = (playerId) => {
  return `${IMG_PREFIX}/avatars/${playerId}.png`;
};
export const ICON_PATHS = {
  hp: `${IMG_PREFIX}/icons/hp.svg`,
  atk: `${IMG_PREFIX}/icons/atk.svg`,
  def: `${IMG_PREFIX}/icons/def.svg`,
};

export const CARD_PREFIX = `${IMG_PREFIX}/cards`;

export const getCardFrontPath = (cardName) => {
  return `${CARD_PREFIX}/front/${cardName}.png`;
};
export const getCardBackPath = (playerId) => {
  return `${CARD_PREFIX}/back/${playerId}.png`;
};
export const getCardPlaceholderPath = (playerId) => {
  return `${CARD_PREFIX}/placeholder/${playerId}.png`;
};

export const CARD_PILE_PATH = 'images/cards/pile.png';
