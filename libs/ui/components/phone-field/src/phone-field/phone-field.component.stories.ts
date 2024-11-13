import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SelectInputOption } from '@bs2-fe-monorepo/ui/components/select-input';
import { PhoneFieldComponent } from './phone-field.component';
import { flags } from './phone-field.component.enum';
import { within } from '@storybook/test';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { provideNgxMask } from 'ngx-mask';

const options: SelectInputOption[] = [
  { value: 1, text: flags.brl, image: 'BR.svg' },
  { value: 2, text: flags.usa, image: 'US.svg' },
  { value: 3, text: flags.chn, image: 'CN.svg' },
  { value: 4, text: flags.esp, image: 'ES.svg' },
];

const meta: Meta<PhoneFieldComponent> = {
  component: PhoneFieldComponent,
  title: 'PhoneFieldComponent',
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
type Story = StoryObj<PhoneFieldComponent>;

const form: FormGroup = new FormGroup({
  flags: new FormControl(null, [CustomValidators.required]),
});

delete form['controls']['flags']['_parent'];

export const Default: Story = {
  args: {
    form: form,
    state: 'default',
    multiple: false,
    id: 'phone',
    testId: 'flags',
    name: 'flags',
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
