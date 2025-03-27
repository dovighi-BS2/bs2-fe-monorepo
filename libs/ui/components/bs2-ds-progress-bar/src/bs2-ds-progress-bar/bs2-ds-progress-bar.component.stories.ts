import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSProgressBarComponent } from './bs2-ds-progress-bar.component';

const meta: Meta<Bs2DSProgressBarComponent> = {
  component: Bs2DSProgressBarComponent,
  title: 'Components/Progress Bar',
  argTypes: {
    percent: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    loop: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    testId: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSProgressBarComponent>;

export const Default: Story = {
  args: {
    percent: 0,
    loop: false,
    testId: '',
  },
};
