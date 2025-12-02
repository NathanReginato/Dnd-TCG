const create = (elementName) => document.createElement(elementName);

const root = (id) => document.getElementById(id);

const addEl = (parent) => (child) => {
  parent.appendChild(child);
  return parent;
};

const map = (fn) => (d) => d.map((x, i) => fn(x, i));

const concat = (arr1) => (arr2) => arr1.concat(arr2);

const el = (elementName) => (className, content, title) => {
  return new element(elementName, className, content, title);
};

const bonus = (s) => Math.floor((s - 10) / 2);

const getStat = (s) => (i) => s[i];

const getAC = (s) => (i) => 10 + getStat(s)(i);

const render = (el) => {
  const a = create(el._element);
  a.innerHTML = el._content;
  a.className = el._className;
  a.title = el._title;
  map(addEl(a))(map(render)(el._children));
  return a;
};

class element {
  _element;
  _className;
  _content;
  _title;
  _children;

  constructor(elementName, className, content, title, children) {
    this._element = elementName || "";
    this._className = className || "";
    this._content = content || "";
    this._title = title || "";
    this._children = children || [];
  }

  ap(children) {
    return new element(
      this._element,
      this._className,
      this._content,
      this._title,
      concat(this._children)(children),
    );
  }
}

const _ = {
  li: el("li"),
  div: el("div"),
  p: el("p"),
  span: el("span"),
  abbr: el("abbr"),
  section: el("section"),
  h1: el("h1"),
  hr: el("hr"),
};
