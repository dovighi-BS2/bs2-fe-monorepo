import { type Meta, type StoryObj } from '@storybook/angular';
import { StatusComponent } from './status.component';

const meta: Meta<StatusComponent> = {
  component: StatusComponent,
  title: 'Components/Status Text',
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
type Story = StoryObj<StatusComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    text: 'Seu texto aqui',
    testId: '',
  },
};
