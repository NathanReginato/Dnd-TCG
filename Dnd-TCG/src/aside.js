const addAsideRootEl = addEl(root("aside"));

const aside = (ac, iniative, speed) =>
  _.div(
    "absolute z-10 flex flex-col justify-center items-center top-4.5 px-1.5",
  )
    .ap(
      _.div(
        "flex flex-col justify-center text-gray-300 w-[1.5em] h-[1.5em] text-center mb-2.5",
      )
        .ap(
          _.div("relative leading-snug text-xs")
            .ap(_.span("", ac))
            .ap(
              _.div("absolute z-50 text-[0.25rem] -bottom-[0.2rem] w-full").ap(
                _.abbr("no-underline", "AC", "Armor Class"),
              ),
            ),
        )
        .ap(
          _.div(
            "absolute top-0 bg-gray-700 text-gray-300 rounded-xs w-[1.5em] h-[1.5em] text-center border-gray-300 border-[0.1rem] border-solid rotate-45 -z-10",
          ),
        ),
    )
    .ap(
      _.div(
        "relative flex justify-center items-center bg-gray-700 rounded-xs w-[1.5em] h-[1.5em] text-center border-gray-300 border-[0.1rem] border-solid mb-1.5",
      )
        .ap(
          _.div("text-gray-300 flex justify-center items-center")
            .ap(_.span("text-[0.5rem] align-middle", "+"))
            .ap(_.span("text-xs align-middle", iniative)),
        )
        .ap(
          _.div(
            "absolute z-50 text-gray-300 text-[0.25rem] -bottom-[0.025rem] w-full",
          ).ap(_.abbr("no-underline", "Init", "Initative")),
        ),
    )
    .ap(
      _.div(
        "relative rounded-full flex justify-center items-center bg-gray-700 w-[1.65em] h-[1.65em] text-center border-gray-300 border-[0.1rem] border-solid",
      )
        .ap(
          _.div("text-gray-300 flex justify-center items-center").ap(
            _.span("text-xs align-middle", speed),
          ),
        )
        .ap(
          _.div(
            "absolute z-50 text-gray-300 text-[0.25rem] -bottom-[0.025rem] w-full",
          ).ap(_.span("no-underline", "Spd")),
        ),
    );
