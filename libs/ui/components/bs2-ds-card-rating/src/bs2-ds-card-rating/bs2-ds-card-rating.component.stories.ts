import { Bs2DSCardRatingComponent } from './bs2-ds-card-rating.component';
import { type Meta, type StoryObj } from '@storybook/angular';

import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const meta: Meta<Bs2DSCardRatingComponent> = {
  component: Bs2DSCardRatingComponent,
  title: 'Form Components/Card Rating',
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    from: {
      control: { type: 'number' },
      defaultValue: { summary: '1' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    to: {
      control: { type: 'number' },
      defaultValue: { summary: '5' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    lastText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    firstText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
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
    form: {
      control: { type: 'object' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'FormGroup',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<Bs2DSCardRatingComponent>;

const form: FormGroup = new FormGroup({
  rate: new FormControl(null, [CustomValidators.required]),
});

delete form['controls']['rate']['_parent'];

export const Default: Story = {
  args: {
    title: 'Como você avalia nossa nova tela inicial?',
    from: 1,
    to: 5,
    firstText: 'Muito ruim',
    lastText: 'Excelente',
    name: 'rate',
    testId: 'bs2_ds_card_rating_test_id',
    form: form,
  },
};
