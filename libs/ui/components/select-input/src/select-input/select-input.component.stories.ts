import { type Meta, type StoryObj } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { SelectInputOption } from './select-input.interface';

const options: SelectInputOption[] = [
  { value: 1, text: 'Categoria 1' },
  { value: 2, text: 'Categoria 2' },
  { value: 3, text: 'Categoria 3' },
  { value: 4, text: 'Categoria 4' },
  { value: 5, text: 'Categoria 5' },
];

const meta: Meta<SelectInputComponent> = {
  component: SelectInputComponent,
  title: 'SelectInputComponent',
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
  },
};
export default meta;
type Story = StoryObj<SelectInputComponent>;

export const Default: Story = {
  args: {
    state: 'default',
    multiple: true,
    id: 'categories',
    testId: 'categories',
    name: 'categories',
    label: 'Categorias',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: 'arrow-down',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Selecione uma opção',
    readOnly: false,
    selecteds: [options[1], options[2]],
    options,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
