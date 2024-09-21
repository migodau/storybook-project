import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
    title: 'Button',
    component: Button,
    args: {
        children: 'Button',
        variant: 'primary',
        disabled: false,
        size: 'medium',
    },
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        variant: {
            control: 'select',
        },
    }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
};