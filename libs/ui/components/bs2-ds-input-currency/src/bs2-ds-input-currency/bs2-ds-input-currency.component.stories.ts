import { type Meta, type StoryObj } from '@storybook/angular';

import { Bs2DSInputSelectOption } from '@bs2-fe-monorepo/ui/components/bs2-ds-input-select';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { flags } from './bs2-ds-input-currency.component.enum';
import { Bs2DSInputCurrencyComponent } from './bs2-ds-input-currency.component';

const options: Bs2DSInputSelectOption[] = [
  { value: flags.brl, text: 'BRL', image: 'BR.svg' },
  { value: flags.usa, text: 'USA', image: 'US.svg' },
  { value: flags.chn, text: 'CHN', image: 'CN.svg' },
  { value: flags.esp, text: 'ESP', image: 'ES.svg' },
];

const meta: Meta<Bs2DSInputCurrencyComponent> = {
  component: Bs2DSInputCurrencyComponent,
  title: 'Form Components/InputCurrency',
  argTypes: {
    control: {
      control: 'inline',
      // options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
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
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputCurrencyComponent>;

const form: FormGroup = new FormGroup({
  flags: new FormControl([], [CustomValidators.required]),
});

delete form['controls']['flags']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('flags'),
    state: 'default',
    id: 'flags',
    testId: 'flags',
    label: 'Bandeiras',
    class: 'custom_class',
    helperText: '',
    errorText: '',
    placeholder: 'Selecione uma opção',
    readOnly: false,
    selecteds: [options[1], options[2]],
    options,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
};
