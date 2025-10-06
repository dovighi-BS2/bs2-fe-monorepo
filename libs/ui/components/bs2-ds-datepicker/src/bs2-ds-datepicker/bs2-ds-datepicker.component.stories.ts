import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSDatepickerComponent } from './bs2-ds-datepicker.component';
import { CustomValidators } from '@bs2/design-system/validators';
import { FormControl, FormGroup } from '@angular/forms';

const meta: Meta<Bs2DSDatepickerComponent> = {
  component: Bs2DSDatepickerComponent,
  title: 'Form Components/Datepicker',
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
    },
    min: {
      control: 'text',
      description: 'opcional',
      defaultValue: { summary: "new Date('1900-01-01T03:00:00.000Z')" },
    },
    max: {
      control: 'text',
      description: 'opcional',
      defaultValue: { summary: "new Date('2100-12-31T03:00:00.000Z')" },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
      description: 'opcional',
      defaultValue: { summary: 'left' },
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
    disabled: {
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
type Story = StoryObj<Bs2DSDatepickerComponent>;

const form: FormGroup = new FormGroup({
  birthday: new FormControl('04/12/1991', []),
  // birthday: new FormControl(new Date('1991-12-05'), [CustomValidators.required]),
});

delete form['controls']['birthday']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('birthday') as FormControl,
    min: new Date('1900-01-01T03:00:00.000Z'),
    max: new Date('2100-12-31T03:00:00.000Z'),
    state: 'default',
    direction: 'left',
    id: 'birthday',
    testId: 'birthday',
    label: 'Data de nascimento',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: 'h',
    helperText: 'Digite sua data de aniversário',
    errorText: '',
    placeholder: 'Ex: 31/01/2024',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    disabled: false,
  },
};
