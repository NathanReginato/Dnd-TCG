const addHeaderRootEl = addEl(root("header"));

const header = (name, className, specialization, race, background, level) =>
  _.div("flex items-center justify-between")
    .ap(
      _.section()
        .ap(
          _.h1("pr-1 w-28 text-xs h-6 flex text-gray-300 items-center").ap(
            _.span("", name),
          ),
        )
        .ap(
          _.div("relative").ap(
            _.div(
              "z-10 bg-gray-300 text-[0.35rem] absolute -bottom-2 left-2 px-2 leading-snug rounded-b-sm",
            )
              .ap(_.span("", className))
              .ap(_.span("", " - "))
              .ap(_.span("", specialization)),
          ),
        ),
    )
    .ap(
      _.div("flex flex-col px-1 text-gray-300 mr-6")
        .ap(_.div("text-[0.35rem]", race))
        .ap(_.hr())
        .ap(_.div("text-[0.35rem]", background)),
    )
    .ap(
      _.div(
        "bg-gray-600 absolute flex justify-center items-center rounded-full right-1 top-2 w-7 h-7 border-2 border-gray-900 border-solid text-center leading-4 z-10",
      )
        .ap(
          _.abbr(
            "px-[0.5em] py-0.5 absolute -left-2 -top-1 bg-gray-500 rounded-full text-[0.3rem] border border-gray-900 border-solid text-gray-200 leading-snug",
            "lvl",
          ),
        )
        .ap(_.span("text-xs text-gray-300 font-bold", level)),
    );
