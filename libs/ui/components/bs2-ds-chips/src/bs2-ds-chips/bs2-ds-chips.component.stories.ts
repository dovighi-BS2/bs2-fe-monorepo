import { type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSChipsComponent } from './bs2-ds-chips.component';
import { CustomValidators } from '@bs2/design-system/validators';
import { FormControl, FormGroup } from '@angular/forms';
import { Bs2DSChipOption } from './bs2-ds-chips.interface';

const options: Bs2DSChipOption[] = Array(10)
  .fill(0)
  .map((_, i) => ({
    value: `item ${String(i + 1).padStart(2, '0')}`,
    label: `item ${String(i + 1).padStart(2, '0')}`,
    disabled: [3, 4, 5].includes(i),
  }));

const meta: Meta<Bs2DSChipsComponent> = {
  component: Bs2DSChipsComponent,
  title: 'Form Components/Chips Checkbox',
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
    },
    options: {
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'Bs2DSChipOption[] | string[]',
        },
      },
    },
    max: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    min: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSChipsComponent>;

const form: FormGroup = new FormGroup({
  reasons: new FormControl([], []),
});

delete form['controls']['reasons']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('reasons'),
    options,
    max: 3,
    min: 1,
  },
};
