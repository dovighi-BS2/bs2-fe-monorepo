import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSDividerComponent } from './bs2-ds-divider.component';

const meta: Meta<Bs2DSDividerComponent> = {
  component: Bs2DSDividerComponent,
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
type Story = StoryObj<Bs2DSDividerComponent>;

export const Default: Story = {
  args: {
    space: 20,
    testId: '',
  },
};
