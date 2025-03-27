import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSStatusComponent } from './bs2-ds-status.component';

const meta: Meta<Bs2DSStatusComponent> = {
  component: Bs2DSStatusComponent,
  title: 'Components/Status',
  argTypes: {
    status: {
      control: 'select',
      options: ['neutral', 'success', 'attention', 'error'],
      defaultValue: { summary: 'neutral' },
      table: {
        type: {
          summary: "'neutral' | 'success' | 'attention' | 'error'",
        },
      },
    },
    text: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
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
type Story = StoryObj<Bs2DSStatusComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    text: 'Seu texto aqui',
    testId: '',
  },
};
