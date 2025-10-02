import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputSelectComponent } from './bs2-ds-input-select.component';

import { Bs2DSInputSelectOption } from './bs2-ds-input-select.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const options: Bs2DSInputSelectOption[] = [
  { value: 1, text: 'Categoria 1' },
  { value: 2, text: 'Categoria 2' },
  { value: 3, text: 'Categoria 3' },
  { value: 4, text: 'Categoria 4' },
  { value: 5, text: 'Categoria 5' },
];

const meta: Meta<Bs2DSInputSelectComponent> = {
  component: Bs2DSInputSelectComponent,
  title: 'Form Components/InputSelect',
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
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
      defaultValue: { summary: 'Bs2DSInputSelectOption[]' },
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
type Story = StoryObj<Bs2DSInputSelectComponent>;

const form: FormGroup = new FormGroup({
  categories: new FormControl(null, [CustomValidators.required]),
});

delete form['controls']['categories']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('categories') as FormControl,
    state: 'default',
    id: 'categories',
    testId: 'categories',
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
  render: (args) => ({
    props: {
      control: args.control,
      state: args.state,
      id: args.id,
      testId: args.testId,
      label: args.label,
      class: args.class,
      leftIcon: args.leftIcon,
      rightIcon: args.rightIcon,
      helperText: args.helperText,
      errorText: args.errorText,
      placeholder: args.placeholder,
      readOnly: args.readOnly,
      options: args.options,
      ariaLabel: args.ariaLabel,
      ariaRequired: args.ariaRequired,
      ariaInvalid: args.ariaInvalid,
      hideCheckbox: args.hideCheckbox,
    },
    template: `
      <bs2-ds-input-select [label]='label' [helperText]='helperText' [control]='control' [options]='options'/>
    `,
  }),
};
