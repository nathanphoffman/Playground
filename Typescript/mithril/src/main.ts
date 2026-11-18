import m from "mithril";
import "./style.css";

let count = 0;
let todos = ["Learn Mithril", "Style it with Tailwind"];
let draft = "";

// Mithril's hyperscript accepts Tailwind classes as a CSS-selector-style
// string ("button.px-4") or through the `class` attribute.
const Button: m.Component<{ onclick: () => void; variant?: "primary" | "danger" }> = {
  view: ({ attrs, children }) =>
    m(
      "button",
      {
        class: [
          "rounded-lg px-4 py-2 font-medium text-white transition",
          attrs.variant === "danger" ? "bg-red-500 hover:bg-red-600" : "bg-indigo-500 hover:bg-indigo-600",
        ].join(" "),
        onclick: attrs.onclick,
      },
      children,
    ),
};

const Card: m.Component<{ title: string }> = {
  view: ({ attrs, children }) =>
    m("section.rounded-xl.bg-white.p-6.shadow-md.dark:bg-slate-800", [
      m("h2.mb-4.text-lg.font-semibold.text-slate-900.dark:text-white", attrs.title),
      children,
    ]),
};

const App: m.Component = {
  view: () =>
    m("main.mx-auto.max-w-md.space-y-6.p-8", [
      m("h1.text-3xl.font-bold.text-slate-900", "Hello, Mithril + Tailwind"),

      m(Card, { title: "Counter" }, [
        m("p.mb-3.text-slate-600", `Clicked ${count} times`),
        m(Button, { onclick: () => count++ }, "Click me"),
      ]),

      m(Card, { title: "Todos" }, [
        m("ul.mb-4.space-y-2", todos.map((t, i) =>
          m("li.flex.items-center.justify-between.rounded-md.bg-slate-100.px-3.py-2", [
            t,
            m(Button, { variant: "danger", onclick: () => todos.splice(i, 1) }, "x"),
          ]),
        )),
        m("form.flex.gap-2", {
          onsubmit: (e: Event) => {
            e.preventDefault();
            if (draft.trim()) todos.push(draft.trim());
            draft = "";
          },
        }, [
          m("input.flex-1.rounded-md.border.border-slate-300.px-3.py-2.focus:outline-none.focus:ring-2.focus:ring-indigo-400", {
            value: draft,
            placeholder: "New todo",
            oninput: (e: InputEvent) => { draft = (e.target as HTMLInputElement).value; },
          }),
          m(Button, { onclick: () => {} }, "Add"),
        ]),
      ]),
    ]),
};

m.mount(document.body, App);
