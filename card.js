const create = (elementName) => document.createElement(elementName);
const addEl = (parent) => (child) => {
  parent.appendChild(child);
  return parent;
};

const el = (elementName) => (className, value, title) => {
  const newEl = create(elementName);
  newEl.className = className || "";
  newEl.innerHTML = value || "";
  newEl.title = title || "";
  const a = addEl(newEl);
  const e = () => newEl;

  return { a, e };
};

const _ = {
  li: el("li"),
  div: el("div"),
  p: el("p"),
  span: el("span"),
  abbr: el("abbr"),
};

const player = {
  level: 6,
  race: "Human",
  class: "Artificer",
  background: "Guild Artisan",
  alignment: "C/N",
  stats: [17, 12, 16, 19, 10, 9],
  proficientcies: ["Arc", "Inv"],
  savingThrows: ["Con", "Int"],
};

const data = {
  skills: [
    ["Athltcs"],
    ["Acrbt", "Soh", "Stlth"],
    [""],
    ["Arcn", "Hstr", "Invstgtn", "Ntr", "Rlgn"],
    ["Anml Hndl", "Insght", "Mdcn", "Prcpt", "Srvvl"],
    ["Dcptn", "Intmdtn", "Prfrmnc", "Prssn"],
  ],
};

const skillsSaves = document.getElementById("skills-saves");
const stats = document.getElementById("stats");

const statLine = (stat, value) =>
  _.li().a(
    _.p("uppercase text-[0.5rem] text-gray-300 w-4").a(
      _.abbr("no-underline", stat).e(),
    ),
  );
// .a(
//   _.div(
//     "flex flex-col justify-center rounded-full bg-gray-900 text-gray-400 text-[0.1em] w-[8em] h-[8em] text-center",
//   ).a(_.p("text-[0.4rem]", value).e()),
// );
// .a(
//   _.div(
//     "flex flex-col justify-center text-gray-900 bg-gray-300 rounded-xs w-5 h-3.5 text-center",
//   ).a(
//     _.p("flex justify-center")
//       .a(_.span("text-[0.5rem] align-middle leading-3", "+"))
//       .a(_.span("text-xs align-middle leading-3", "2")),
//   ),
// );
//
const statRoot = addEl(stats);
const str = statLine("Str", 15);
statRoot(str);

// <li
//   class=""
// >
//   <p class="uppercase text-[0.5rem] text-gray-300 w-4">
//     <abbr class="no-underline" title="Strength">Str</abbr>
//   </p>
//   <div
//     class="flex flex-col justify-center rounded-full bg-gray-900 text-gray-400 text-[0.1em] w-[8em] h-[8em] text-center"
//   >
//     <p class="text-[0.4rem]">17</p>
//   </div>
//   <div
//     class="flex flex-col justify-center text-gray-900 bg-gray-300 rounded-xs w-5 h-3.5 text-center"
//   >
//     <p class="flex justify-center">
//       <span class="text-[0.5rem] align-middle leading-3">+</span
//       ><span class="align-middle leading-3 text-xs">3</span>
//     </p>
//   </div>
// </li>
//
