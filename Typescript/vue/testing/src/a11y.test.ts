import { mount } from "@vue/test-utils";
import { axe } from "vitest-axe";
import { expect, it } from "vitest";
import BadForm from "./BadForm.vue";
import LoginForm from "./LoginForm.vue";

// axe-core scans the rendered HTML for WCAG problems (missing labels, bad contrast rules, wrong roles...).
it("a labelled form has no accessibility violations", async () => {
  const wrapper = mount(LoginForm, { attachTo: document.body });
  expect(await axe(wrapper.element.parentElement!)).toHaveNoViolations();
  wrapper.unmount();
});

it("finds the unlabelled input", async () => {
  const wrapper = mount(BadForm, { attachTo: document.body });
  const results = await axe(wrapper.element.parentElement!);
  expect(results.violations.map((v) => v.id)).toContain("label");
  wrapper.unmount();
});
