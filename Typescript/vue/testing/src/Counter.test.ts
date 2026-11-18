import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Counter from "./Counter.vue";

describe("Counter", () => {
  it("renders the label and count", () => {
    const wrapper = mount(Counter, { props: { label: "Clicks" } });
    expect(wrapper.text()).toBe("Clicks: 0");
  });

  it("increments and emits an event on click", async () => {
    const wrapper = mount(Counter, { props: { label: "Clicks" } });
    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toBe("Clicks: 1");
    expect(wrapper.emitted("change")).toEqual([[1]]);
  });
});
