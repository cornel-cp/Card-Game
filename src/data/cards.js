import { MediaType } from './constants';

export const Fireball1 = {
  id: '0',
  media: MediaType.fireball,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 3,
    },
  ],
};

export const Fireball2 = {
  id: '1',
  media: MediaType.fireball,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 5,
    },
  ],
};

export const Fireball3 = {
  id: '2',
  media: MediaType.fireball,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 9,
    },
  ],
};

export const Freeze1 = {
  id: '3',
  media: MediaType.freeze,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 4,
    },
  ],
};

export const Freeze2 = {
  id: '4',
  media: MediaType.freeze,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 6,
    },
  ],
};

export const Freeze3 = {
  id: '5',
  media: MediaType.freeze,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 8,
    },
  ],
};

export const Thunder1 = {
  id: '6',
  media: MediaType.thunder,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 7,
    },
  ],
};

export const Thunder2 = {
  id: '7',
  media: MediaType.thunder,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 12,
    },
  ],
};

export const Thunder3 = {
  id: '8',
  media: MediaType.thunder,
  effects: [
    {
      type: 'damage',
      duration: 'instant',
      target: 'opponent',
      value: 18,
    },
  ],
};

export const Heal1 = {
  id: '9',
  media: MediaType.heal,
  effects: [
    {
      type: 'heal',
      duration: 'instant',
      target: 'player',
      value: 5,
    },
  ],
};

export const Heal2 = {
  id: '10',
  media: MediaType.heal,
  effects: [
    {
      type: 'heal',
      duration: 'instant',
      target: 'player',
      value: 10,
    },
  ],
};

export const Heal3 = {
  id: '11',
  media: MediaType.heal,
  effects: [
    {
      type: 'heal',
      duration: 'instant',
      target: 'player',
      value: 15,
    },
  ],
};

export const Blessing = {
  id: '12',
  media: MediaType.sword,
  effects: [
    {
      type: 'buffAtk',
      duration: 'active',
      target: 'player',
      value: 3,
    },
  ],
};

export const Armor = {
  id: '13',
  media: MediaType.shield,
  effects: [
    {
      type: 'buffDef',
      duration: 'active',
      target: 'player',
      value: 3,
    },
  ],
};

export const Weaken = {
  id: '14',
  media: MediaType.weaken,
  effects: [
    {
      type: 'debuffAtk',
      duration: 'active',
      target: 'opponent',
      value: 3,
    },
  ],
};

export const Curse = {
  id: '15',
  media: MediaType.weaken,
  effects: [
    {
      type: 'debuffDef',
      duration: 'active',
      target: 'opponent',
      value: 3,
    },
  ],
};

export const Purify = {
  id: '16',
  media: MediaType.magic,
  effects: [
    {
      type: 'purify',
      duration: 'instant',
      target: 'player',
    },
  ],
};

export const Dispel = {
  id: '17',
  media: MediaType.magic,
  effects: [
    {
      type: 'dispel',
      duration: 'instant',
      target: 'opponent',
    },
  ],
};

export const Berserker = {
  id: '18',
  media: MediaType.sword,
  effects: [
    {
      type: 'doubleDmg',
      duration: 'active',
      target: 'player',
    },
  ],
};

export const Block = {
  id: '19',
  media: MediaType.shield,
  effects: [
    {
      type: 'blockDmg',
      duration: 'active',
      target: 'player',
    },
  ],
};
