import { type Meta, type StoryObj } from '@storybook/angular';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { SelectInputOption } from '@bs2-fe-monorepo/ui/components/select-input';
import { InputCurrencyComponent } from './input-currency.component';

const options: SelectInputOption[] = [
  { value: 1, text: 'BRL', image: '123' },
  { value: 2, text: 'USD', image: '123' },
  { value: 3, text: 'EUR', image: '123' },
  { value: 4, text: 'GBP', image: '123' },
  { value: 5, text: 'CAD', image: '123' },
  { value: 6, text: 'AUD', image: '123' },
  { value: 7, text: 'CNY', image: '123' },
  { value: 8, text: 'AED', image: '123' },
];

const meta: Meta<InputCurrencyComponent> = {
  component: InputCurrencyComponent,
  title: 'InputCurrencyComponent',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
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
      defaultValue: { summary: 'arrow-down' },
    },
    helperText: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    errorText: {
      control: { type: 'text' },
      description: 'Esta prop é para forçar algum erro que não esteja mapeado em CustomValidatorMessages',
      defaultValue: { summary: '(vazio)' },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: 'Selecione uma opção' },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
    selecteds: {
      control: { type: 'text' },
      description: 'Este campo será vinculado com o [control] do ReactiveForms',
      defaultValue: { summary: '[control] initial value' },
    },
    options: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'SelectInputOption[]' },
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
    hideCheckbox: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'true' },
    },
  },
};
export default meta;
type Story = StoryObj<InputCurrencyComponent>;

export const Default: Story = {
  args: {
    state: 'default',
    multiple: false,
    id: 'flags',
    testId: 'flags',
    name: 'flags',
    label: 'flags',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: 'arrow-down',
    helperText: '',
    errorText: '',
    placeholder: 'Selecione uma opção',
    readOnly: false,
    selecteds: [options[1], options[2]],
    options,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    hideCheckbox: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
