import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const button = (args: any, text = 'button') =>
  `<lib-button 
      type='${args?.type}'
      design='${args?.design}'
      theme='${args?.theme}'
      [disabled]='${args?.disabled}'
      [tabindex]='${args?.tabindex}'
      id='${args?.id}'
      testId='${args?.testId}'
      class='${args?.class}'
      ariaLabel='${args?.ariaLabel}'
  >
    ${text}
  </lib-button>`;

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  args: {
    design: 'filled',
  },
  argTypes: {
    type: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: 'button' },
    },
    design: {
      options: ['filled', 'outlined', 'flat'],
      control: { type: 'inline-radio' },
      description: 'opcional',
      defaultValue: { summary: 'filled' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
      description: 'opcional',
      defaultValue: { summary: false },
    },
    tabindex: {
      options: [0, -1],
      control: { type: 'inline-radio' },
      description: 'opcional',
      defaultValue: { summary: 0 },
    },
    id: {
      control: { type: 'text' },
      description: 'recomendado',
      defaultValue: { summary: '(vazio)' },
    },
    testId: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: {
        summary: '(vazio)',
        detail:
          'Caso não houver [testId] será usado o [id] como valor para [testId].',
      },
    },
    class: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'recomendado',
      defaultValue: { summary: '(vazio)' },
    },
    clicked: {
      // control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: 'new EventEmitter()' },
    },
  },
  render: (args: any) => ({
    template: button(args),
  }),
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
