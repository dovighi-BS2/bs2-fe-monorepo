import { type Meta, type StoryObj } from '@storybook/angular';
import { TokenFieldComponent } from './token-field.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<TokenFieldComponent> = {
  component: TokenFieldComponent,
  title: 'Components/Token Field',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'disabled', 'error'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    type: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'text' },
    },
    qtdInputs: {
      control: { type: 'number' },
      description: 'opcional',
      defaultValue: { summary: 6 },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: false },
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
    class: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    ariaRequired: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
    ariaInvalid: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
  },
};
export default meta;
type Story = StoryObj<TokenFieldComponent>;

export const Default: Story = {
  args: {
    state: 'default',
    type: 'text',
    qtdInputs: 6,
    disabled: false,
    id: 'token',
    testId: 'token',
    name: 'token',
    class: 'custom_class',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/token-field works!/gi)).toBeTruthy();
  },
};
