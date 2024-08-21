import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2TextInputComponent } from './bs2-text-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<Bs2TextInputComponent> = {
  component: Bs2TextInputComponent,
  title: 'Bs2TextInputComponent',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    type: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'text' },
    },
    id: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    testId: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    name: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    label: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    class: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    leftIcon: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    rightIcon: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    helperText: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    errorText: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2TextInputComponent>;

export const Default: Story = {
  args: {
    state: 'default',
    type: 'text',
    id: 'email',
    testId: 'email',
    name: 'email',
    label: 'E-mail',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Ex: joao.da.silva@gmail.com',
    readOnly: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bs2-text-input works!/gi)).toBeTruthy();
  },
};
