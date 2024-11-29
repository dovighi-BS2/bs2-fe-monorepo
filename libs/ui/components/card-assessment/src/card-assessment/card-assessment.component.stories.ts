import { CardAssessmentComponent } from './card-assessment.component';
import { type Meta, type StoryObj } from '@storybook/angular';

import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const meta: Meta<CardAssessmentComponent> = {
  component: CardAssessmentComponent,
  title: 'Form Components/Card Assessment',
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
type Story = StoryObj<CardAssessmentComponent>;

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
    testId: 'card_assessment_test_id',
    form: form,
  },
};
