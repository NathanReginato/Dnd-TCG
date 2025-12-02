map(addStatRootEl)(map(render)(stats));
map(addSkillRootEl)(map(render)(skills));
addHeaderRootEl(
  render(
    header(
      player.name,
      player.class,
      player.specialization,
      player.race,
      player.background,
      player.level,
    ),
  ),
);
addAsideRootEl(render(aside(playerAC, bonus(getPlayerStat(s.Dex)), "50")));
