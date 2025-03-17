import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSChipsComponent } from './bs2-ds-chips.component';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { FormControl, FormGroup } from '@angular/forms';
import { Bs2DSChipOption } from './bs2-ds-chips.interface';

const options: Bs2DSChipOption[] = Array(10)
  .fill(0)
  .map((_, i) => ({
    label: `item ${String(i + 1).padStart(2, '0')}`,
    disabled: [3, 4, 5].includes(i),
  }));

// const options: string[] = Array(10)
//   .fill(0)
//   .map((_, i) => `item ${String(i + 1).padStart(2, '0')}`);

const meta: Meta<Bs2DSChipsComponent> = {
  component: Bs2DSChipsComponent,
  title: 'Form Components/Chips Checkbox',
  argTypes: {
    options: {
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'Bs2DSChipOption[] | string[]',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSChipsComponent>;

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
