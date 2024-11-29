import { type Meta, type StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';

const meta: Meta<TagComponent> = {
  component: TagComponent,
  title: 'Components/Tag Text',
  argTypes: {
    status: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'attention', 'error'],
      defaultValue: { summary: 'neutral' },
      table: {
        type: {
          summary: "'primary' | 'neutral' | 'success' | 'attention' | 'error'",
        },
      },
    },
    size: {
      control: 'select',
      options: ['regular', 'small'],
      defaultValue: { summary: 'neutral' },
      table: {
        type: {
          summary: "'regular' | 'small'",
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
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    size: 'regular',
    text: 'Seu texto aqui',
    testId: '',
  },
};
