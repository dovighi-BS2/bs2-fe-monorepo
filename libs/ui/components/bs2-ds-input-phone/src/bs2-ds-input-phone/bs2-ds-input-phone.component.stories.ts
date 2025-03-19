import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { Bs2DSInputSelectOption } from '@bs2-fe-monorepo/ui/components/bs2-ds-input-select';
import { Bs2DSInputPhoneComponent } from './bs2-ds-input-phone.component';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { provideNgxMask } from 'ngx-mask';
import { flags } from '@bs2-fe-monorepo/ui/components/bs2-ds-input-currency';

const options: Bs2DSInputSelectOption[] = [
  { value: flags.brl, text: flags.brl, image: 'BR.svg' },
  { value: flags.usa, text: flags.usa, image: 'US.svg' },
  { value: flags.chn, text: flags.chn, image: 'CN.svg' },
  { value: flags.esp, text: flags.esp, image: 'ES.svg' },
];

const meta: Meta<Bs2DSInputPhoneComponent> = {
  component: Bs2DSInputPhoneComponent,
  title: 'Form Components/InputPhone',
  decorators: [
    moduleMetadata({
      providers: [provideNgxMask({ validation: false })],
    }),
  ],
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
      defaultValue: { summary: 'true' },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputPhoneComponent>;

const form: FormGroup = new FormGroup({
  phone: new FormControl(null, [CustomValidators.required]),
});

delete form['controls']['phone']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('phone'),
    state: 'default',
    multiple: false,
    id: 'phone',
    testId: 'flags',
    label: '',
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
};
