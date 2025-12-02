const addSkillRootEl = addEl(root("skills"));

const skill = (type, total, bonus) =>
  _.li(
    "flex bg-gray-700 items-center gap-1 rounded-l-sm pl-1 pr-[0.2em] py-0.5 w-fit",
  )
    .ap(
      _.p("uppercase text-[0.5rem] text-gray-300 w-4").ap(
        _.abbr("no-underline", type, "Strength"),
      ),
    )
    .ap(
      _.div(
        "flex flex-col justify-center rounded-full bg-gray-900 text-gray-400 text-[0.1em] w-[8em] h-[8em] text-center",
      ).ap(_.p("text-[0.4rem]", total)),
    )
    .ap(
      _.div(
        "flex flex-col justify-center text-gray-900 bg-gray-300 rounded-xs w-5 h-3.5 text-center",
      ).ap(
        _.p("flex justify-center")
          .ap(
            _.span(
              "text-[0.5rem] align-middle leading-3",
              bonus < 0 ? "-" : "+",
            ),
          )
          .ap(
            _.span(
              "align-middle leading-3 text-xs",
              `${bonus < 0 ? bonus * -1 : bonus}`,
            ),
          ),
      ),
    );

const skills = map((x, i) => stat(data.stats[i], x, bonus(x)))(player.stats);
