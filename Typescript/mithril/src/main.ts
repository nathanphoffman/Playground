import m from "mithril";

let count = 0;

const Counter: m.Component = {
  view: () => [
    m("h1", "Hello, Mithril"),
    m("button", { onclick: () => { count++; } }, `Clicked ${count} times`),
  ],
};

m.mount(document.body, Counter);
