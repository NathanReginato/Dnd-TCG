const addAsideRootEl = addEl(root("aside"));

const aside = (ac, iniative, speed) =>
  _.div("absolute z-10 flex flex-col top-4.5 unded-xs px-2 gap-2")
    .ap(
      _.div(
        "flex flex-col justify-center text-gray-300 w-[1.5em] h-[1.5em] text-center",
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
        "relative flex justify-center items-center bg-gray-700 rounded-xs w-[1.5em] h-[1.5em] text-center border-gray-300 border-[0.1rem] border-solid",
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
        "relative flex justify-center items-center bg-gray-700 rounded-xs w-[1.5em] h-[1.5em] text-center border-gray-300 border-[0.1rem] border-solid",
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

// <div class="">
//   <div class="">
//     <div class="">
//       <span id="armor-class">25</span>
//       <div class="">
//         <abbr class="" title="Armor Class">
//           AC
//         </abbr>
//       </div>
//     </div>
//     <div class=""></div>
//   </div>
//   <div class="">
//     <div class="">
//       <span class="">+</span>
//       <span id="initative" class="text-xs align-middle">
//         3
//       </span>
//     </div>
//     <div class="">
//       <abbr class="" title="Initative">
//         Init
//       </abbr>
//     </div>
//   </div>
//   <div class="">
//     <div class="text-gray-400 flex justify-center items-center">
//       <span id="speed" class="text-xs align-middle">
//         60
//       </span>
//     </div>
//     <div class="absolute z-50 text-gray-400  -bottom-[0.025rem] w-full">
//       <abbr class="no-underline" title="Initative">
//         Speed
//       </abbr>
//     </div>
//   </div>
// </div>;
