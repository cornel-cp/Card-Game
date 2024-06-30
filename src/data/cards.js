export const FireballI = {
  id: "001",
  name: "Fireball I",
  text: "Damage 3",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 3,
    },
  ],
};

export const FireballII = {
  id: "002",
  name: "Fireball II",
  text: "Damage 5",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 5,
    },
  ],
};

export const FireballIII = {
  id: "003",
  name: "Fireball III",
  text: "Damage 9",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 9,
    },
  ],
};

export const FrostBoltI = {
  id: "004",
  name: "Frostbolt I",
  text: "Damage 4",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 4,
    },
  ],
};

export const FrostBoltII = {
  id: "005",
  name: "Frostbolt II",
  text: "Damage 6",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 6,
    },
  ],
};

export const FrostBoltIII = {
  id: "006",
  name: "Frostbolt III",
  text: "Damage 8",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 8,
    },
  ],
};

export const ArcaneBarrageI = {
  id: "007",
  name: "Arcane Barrage I",
  text: "Damage 7",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 7,
    },
  ],
};

export const ArcaneBarrageII = {
  id: "008",
  name: "Arcane Barrage II",
  text: "Damage 12",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 12,
    },
  ],
};

export const ArcaneBarrageIII = {
  id: "009",
  name: "Arcane Barrage III",
  text: "Damage 18",
  effects: [
    {
      type: "damage",
      duration: "instant",
      target: "opponent",
      value: 18,
    },
  ],
};

export const AngelicHealingI = {
  id: "010",
  name: "Angelic Healing I",
  text: "+5 HP",
  effects: [
    {
      type: "heal",
      duration: "instant",
      target: "player",
      value: 5,
    },
  ],
};

export const AngelicHealingII = {
  id: "011",
  name: "Angelic Healing II",
  text: "+10 HP",
  effects: [
    {
      type: "heal",
      duration: "instant",
      target: "player",
      value: 10,
    },
  ],
};

export const AngelicHealingIII = {
  id: "012",
  name: "Angelic Healing III",
  text: "+15 HP",
  effects: [
    {
      type: "heal",
      duration: "instant",
      target: "player",
      value: 15,
    },
  ],
};

export const BlessingOfKing = {
  id: "013",
  name: "Blessing of King",
  text: "+3 Attack",
  effects: [
    {
      type: "buffAtk",
      duration: "active",
      target: "player",
      value: 3,
    },
  ],
};

export const BlessingOfGuardian = {
  id: "014",
  name: "Blessing of Guardian",
  text: "+3 Shield",
  effects: [
    {
      type: "buffDef",
      duration: "active",
      target: "player",
      value: 3,
    },
  ],
};

export const CurseOfNecromancer = {
  id: "015",
  name: "Curse of Necromancer",
  text: "Enemy -3 Attack",
  effects: [
    {
      type: "debuffAtk",
      duration: "active",
      target: "opponent",
      value: 3,
    },
  ],
};

export const CurseOfWarlock = {
  id: "016",
  name: "Curse of Warlock",
  text: "Enemy -3 Shield",
  effects: [
    {
      type: "debuffDef",
      duration: "active",
      target: "opponent",
      value: 3,
    },
  ],
};

export const HolyPrayer = {
  id: "017",
  name: "Holy Prayer",
  text: "Remove Debuffs",
  effects: [
    {
      type: "purify",
      duration: "instant",
      target: "player",
    },
  ],
};

export const SwordOfJustice = {
  id: "018",
  name: "Sword of Justice",
  text: "Remove Enemy Buffs",
  effects: [
    {
      type: "dispel",
      duration: "instant",
      target: "opponent",
    },
  ],
};

export const BerserkerRage = {
  id: "019",
  name: "Berserker Rage",
  text: "Double Next Damage",
  effects: [
    {
      type: "doubleDmg",
      duration: "active",
      target: "player",
    },
  ],
};

export const ShieldBlock = {
  id: "020",
  name: "Shield Block",
  text: "Block Next Damage",
  effects: [
    {
      type: "blockDmg",
      duration: "active",
      target: "player",
    },
  ],
};
