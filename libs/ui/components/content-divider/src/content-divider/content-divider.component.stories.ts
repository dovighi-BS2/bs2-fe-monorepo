import { type Meta, type StoryObj } from '@storybook/angular';
import { ContentDividerComponent } from './content-divider.component';

const meta: Meta<ContentDividerComponent> = {
  component: ContentDividerComponent,
  title: 'Components/Content Divider',
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
type Story = StoryObj<ContentDividerComponent>;

export const Default: Story = {
  args: {
    space: 20,
    testId: '',
  },
};
