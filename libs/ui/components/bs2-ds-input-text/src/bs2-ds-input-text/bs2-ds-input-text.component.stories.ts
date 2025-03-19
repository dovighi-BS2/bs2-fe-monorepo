import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTextComponent } from './bs2-ds-input-text.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const meta: Meta<Bs2DSInputTextComponent> = {
  component: Bs2DSInputTextComponent,
  title: 'Form Components/InputText',
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
type Story = StoryObj<Bs2DSInputTextComponent>;

const form: FormGroup = new FormGroup({
  email: new FormControl('', [CustomValidators.required, CustomValidators.numeric]),
});

delete form['controls']['email']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('email'),
    state: 'default',
    type: 'text',
    id: 'email',
    testId: 'email',
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bs2-ds-input-text works!/gi)).toBeTruthy();
  },
};
