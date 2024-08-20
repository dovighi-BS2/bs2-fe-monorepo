import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2TextInputComponent } from './bs2-text-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<Bs2TextInputComponent> = {
  component: Bs2TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  title: 'Bs2TextInputComponent',
  argTypes: {
    // form: {
    //   control: { type: 'text' },
    //   description: 'obrigatório',
    //   defaultValue: { summary: 'FormGroup' },
    // },
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
  },
};
export default meta;
type Story = StoryObj<Bs2TextInputComponent>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'email',
    name: 'email',
    label: 'E-mail',
    class: 'custom_class',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite seu e-mail principal.',
    placeholder: 'Ex: joao.da.silva@gmail.com',
    readOnly: false,
  },
  render: (args) => {
    const form = new FormGroup({
      email: new FormControl('', []),
    });

    return {
      template: `
        <form [formGroup]="form">
          <bs2-text-input
            type="${args?.type}"
            id="${args?.id}"
            name="${args?.name}"
            label="${args?.label}"
            class="${args?.class}"
            leftIcon="${args?.leftIcon}"
            rightIcon="${args?.rightIcon}"
            helperText="${args?.helperText}"
            placeholder="${args?.placeholder}"
            [readOnly]="${args?.readOnly}"
          >
            <ng-content errors>Campo Obrigatório</ng-content>
          </bs2-text-input>
        </form>
      `,
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bs2-text-input works!/gi)).toBeTruthy();
  },
};
