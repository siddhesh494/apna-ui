import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ApnaUI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    classes: '',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    // primary: true,
    classes: 'outline',
    label: 'Button',
  },
};
export const SmallOutline: Story = {
  args: {
    // primary: true,
    classes: 'outline small',
    label: 'Button',
  },
};

export const LargeOutline: Story = {
  args: {
    // primary: true,
    classes: 'outline large',
    label: 'Button',
  },
};


export const Contain: Story = {
  args: {
    // primary: true,
    classes: 'contain',
    label: 'Button',
  },
};

export const SmallContain: Story = {
  args: {
    // primary: true,
    classes: 'contain small',
    label: 'Button',
  },
};

export const LargeContain: Story = {
  args: {
    // primary: true,
    classes: 'contain large',
    label: 'Button',
  },
};


export const Disabled: Story = {
  args: {
    classes: 'contain',
    label: 'Button',
    isDisabled: true
  },
};

export const Loading: Story = {
  args: {
    classes: 'contain',
    label: 'Button',
    isLoading: true
  },
};

export const onClick: Story = {
  args: {
    classes: 'contain',
    label: 'Button',
    isDisabled: true,
    handleOnClick: ()=>{
      console.log("Button click")
    }
  },
};



