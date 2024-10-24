import { type Meta, type StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';

const meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'DatePickerComponent',
  argTypes: {},
};
export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
  args: {},
};
