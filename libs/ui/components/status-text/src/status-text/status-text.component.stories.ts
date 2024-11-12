import { type Meta, type StoryObj } from '@storybook/angular';
import { StatusTextComponent } from './status-text.component';

const meta: Meta<StatusTextComponent> = {
  component: StatusTextComponent,
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
type Story = StoryObj<StatusTextComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    text: 'Seu texto aqui',
    testId: '',
  },
};
