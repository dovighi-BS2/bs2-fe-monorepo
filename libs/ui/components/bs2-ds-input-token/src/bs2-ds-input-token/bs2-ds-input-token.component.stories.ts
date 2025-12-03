import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTokenComponent } from './bs2-ds-input-token.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const meta: Meta<Bs2DSInputTokenComponent> = {
  component: Bs2DSInputTokenComponent,
  title: 'Form Components/InputToken',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'disabled', 'error'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    label: {
      control: { type: 'text' },
      description: 'obrigatório',
      defaultValue: { summary: 'text' },
    },
    amount: {
      control: { type: 'number' },
      description: 'opcional',
      defaultValue: { summary: 6 },
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
    class: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputTokenComponent>;

const form: FormGroup = new FormGroup({
  token: new FormControl('', [CustomValidators.required, CustomValidators.minLength(6)]),
});

delete form['controls']['token']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('token') as FormControl,
    state: 'default',
    label: '',
    amount: 6,
    helperText: '',
    id: 'token',
    testId: 'token',
    class: 'custom_class',
    readOnly: false,
    hideErrors: false,
  },
};
