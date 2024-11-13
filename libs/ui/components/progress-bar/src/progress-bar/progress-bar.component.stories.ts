import { type Meta, type StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

const meta: Meta<ProgressBarComponent> = {
  component: ProgressBarComponent,
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
type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    percent: 0,
    loop: false,
    testId: '',
  },
};
