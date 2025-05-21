import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTextareaComponent } from './bs2-ds-input-textarea.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const meta: Meta<Bs2DSInputTextareaComponent> = {
  component: Bs2DSInputTextareaComponent,
  title: 'Form Components/InputTextArea',
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
    autosize: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    resize: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: { summary: '1' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    maxLength: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: {
        type: {
          summary: 'number',
        },
      },
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
type Story = StoryObj<Bs2DSInputTextareaComponent>;

const form: FormGroup = new FormGroup({
  description: new FormControl('', [CustomValidators.required, CustomValidators.maxLength(300)]),
});

delete form['controls']['description']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('description') as FormControl,
    state: 'default',
    id: 'description',
    autosize: false,
    resize: false,
    rows: 1,
    maxLength: 300,
    testId: 'description',
    label: 'Descrição',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bs2-ds-input-textarea works!/gi)).toBeTruthy();
  },
};
