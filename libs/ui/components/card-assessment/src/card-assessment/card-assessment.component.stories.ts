import { CardAssessmentComponent } from './card-assessment.component';
import { type Meta, type StoryObj } from '@storybook/angular';

import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

const meta: Meta<CardAssessmentComponent> = {
  component: CardAssessmentComponent,
  title: 'Components/Card Assessment',
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardAssessmentComponent>;

const form: FormGroup = new FormGroup({
  rate: new FormControl(null, [CustomValidators.required]),
});

delete form['controls']['rate']['_parent'];

export const Default: Story = {
  args: {
    form: form,
    name: 'rate',
    title: 'Como você avalia nossa nova tela inicial?',
    from: 1,
    to: 5,
    firstText: 'Muito ruim',
    lastText: 'Excelente',
  },
};
