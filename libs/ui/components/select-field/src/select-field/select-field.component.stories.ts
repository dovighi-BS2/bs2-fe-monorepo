import { type Meta, type StoryObj } from '@storybook/angular';
import { SelectFieldComponent } from './select-field.component';

import { SelectFieldOption } from './select-field.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const options: SelectFieldOption[] = [
  { value: 1, text: 'Categoria 1' },
  { value: 2, text: 'Categoria 2' },
  { value: 3, text: 'Categoria 3' },
  { value: 4, text: 'Categoria 4' },
  { value: 5, text: 'Categoria 5' },
];

const meta: Meta<SelectFieldComponent> = {
  component: SelectFieldComponent,
  title: 'Form Components/Select Input',
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
    options: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'SelectFieldOption[]' },
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
      defaultValue: { summary: 'false' },
    },
  },
};
export default meta;
type Story = StoryObj<SelectFieldComponent>;

const form: FormGroup = new FormGroup({
  categories: new FormControl([2, 3, 4], [CustomValidators.required]),
});

delete form['controls']['categories']['_parent'];

export const Default: Story = {
  args: {
    form: form,
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
    options,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    hideCheckbox: false,
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   expect(canvas.getByText(/text-field works!/gi)).toBeTruthy();
  // },
};
