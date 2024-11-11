import { type Meta, type StoryObj } from '@storybook/angular';
import { ChipsCheckboxComponent } from './chips-checkbox.component';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { FormControl, FormGroup } from '@angular/forms';
import { ChipCheckboxOption } from './chip-checkbox.interface';

const options: ChipCheckboxOption[] = Array(10)
  .fill(0)
  .map((_, i) => ({
    label: `item ${String(i + 1).padStart(2, '0')}`,
    disabled: [3, 4, 5].includes(i),
  }));

// const options: string[] = Array(10)
//   .fill(0)
//   .map((_, i) => `item ${String(i + 1).padStart(2, '0')}`);

const meta: Meta<ChipsCheckboxComponent> = {
  component: ChipsCheckboxComponent,
  title: 'ChipsCheckboxComponent',
  argTypes: {
    options: {
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'ChipCheckboxOption[] | string[]',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<ChipsCheckboxComponent>;

const form: FormGroup = new FormGroup({
  reasons: new FormControl([], [CustomValidators.required]),
});

delete form['controls']['reasons']['_parent'];

export const Default: Story = {
  args: {
    form: form,
    name: 'reasons',
    options,
  },
};
