import { type Meta, type StoryObj } from '@storybook/angular';
import { DividerComponent } from './divider.component';

const meta: Meta<DividerComponent> = {
  component: DividerComponent,
  title: 'Components/Divider',
  argTypes: {
    space: {
      control: { type: 'number' },
      defaultValue: { summary: 20 },
      table: {
        type: {
          summary: 'number',
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
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
  args: {
    space: 20,
    testId: '',
  },
};
