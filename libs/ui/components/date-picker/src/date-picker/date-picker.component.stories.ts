import { type Meta, type StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'DatePickerComponent',
  argTypes: {},
};
export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
