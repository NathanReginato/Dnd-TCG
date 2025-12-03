const player = {
  name: "Kael Burninger",
  level: 17,
  race: "Harringon",
  class: ["Bard"],
  specialization: ["Swashbuckler"],
  background: "Celebrity Adventurers Scion",
  alignment: "C/N",
  stats: [17, 12, 16, 19, 10, 9],
  proficientcies: ["Arc", "Inv"],
  savingThrows: ["Con", "Int"],
};

const s = {
  Str: 0,
  Dex: 1,
  Con: 2,
  Int: 3,
  Wis: 4,
  Cha: 5,
};

const getPlayerStat = getStat(player.stats);

const playerAC = getStat(player.stats)(s.Dex);

const data = {
  stats: Object.keys(s),
  skills: [
    ["Athltcs"],
    ["Acrbt", "Soh", "Stlth"],
    [""],
    ["Arcn", "Hstr", "Invstgtn", "Ntr", "Rlgn"],
    ["Anml Hndl", "Insght", "Mdcn", "Prcpt", "Srvvl"],
    ["Dcptn", "Intmdtn", "Prfrmnc", "Prssn"],
  ],
};
