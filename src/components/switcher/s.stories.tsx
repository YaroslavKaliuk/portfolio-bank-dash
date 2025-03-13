import type { Meta, StoryObj } from "@storybook/react";

import { Switcher } from ".";

const meta = {
  title: "Components/Forms/Switcher",
  component: Switcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
  },
};
