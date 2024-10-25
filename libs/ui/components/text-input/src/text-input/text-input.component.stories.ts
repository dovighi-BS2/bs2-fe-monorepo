import { type Meta, type StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'TextInputComponent',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    type: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'text' },
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
type Story = StoryObj<TextInputComponent>;

const form: FormGroup = new FormGroup({
  email: new FormControl('', [
    CustomValidators.required,
    CustomValidators.numeric,
  ]),
});

// delete form['controls']['email']['_parent'];

export const Default: Story = {
  args: {
    state: 'default',
    type: 'text',
    id: 'email',
    testId: 'email',
    name: 'email',
    label: 'E-mail',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Ex: joao.da.silva@gmail.com',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  render: (args: TextInputComponent) => ({
    props: {
      ...args,
      form: form,
      template: `
            <text-input
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
