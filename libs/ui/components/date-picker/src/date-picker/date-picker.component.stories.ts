import { type Meta, type StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { FormControl, FormGroup } from '@angular/forms';

const meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'DatePickerComponent',
  argTypes: {
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
type Story = StoryObj<DatePickerComponent>;

const form: FormGroup = new FormGroup({
  birthday: new FormControl('', [CustomValidators.required]),
});

export const Default: Story = {
  args: {
    state: 'default',
    id: 'birthday',
    testId: 'birthday',
    name: 'birthday',
    label: 'Data de nascimento',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite sua data de aniversário',
    errorText: '',
    placeholder: 'Ex: 31/01/2024',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  render: (args: DatePickerComponent) => ({
    props: {
      ...args,
      form: form,
      template: `
            <date-picker
              form='${args.form}'
              id='${args.id}'
              testId='${args.testId}'
              name='${args.name}'
              label='${args.label}'
              class='${args.class}'
              leftIcon='${args.leftIcon}'
              rightIcon='${args.rightIcon}'
              helperText='${args.helperText}'
              errorText='${args.errorText}'
              placeholder='${args.placeholder}'
            />
            `,
    },
  }),
};
