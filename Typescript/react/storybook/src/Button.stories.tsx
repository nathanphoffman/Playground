import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

// Each exported story is one state of the component, shown on its own in the Storybook sidebar.
const meta = { title: "Button", component: Button, args: { label: "Click me" } } satisfies Meta<typeof Button>;
export default meta;

export const Primary: StoryObj<typeof meta> = { args: { primary: true } };
export const Secondary: StoryObj<typeof meta> = { args: { primary: false } };
