import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { Bs2DSInputPhoneComponent } from './bs2-ds-input-phone.component';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

const meta: Meta<Bs2DSInputPhoneComponent> = {
  component: Bs2DSInputPhoneComponent,
  title: 'Form Components/InputPhone',
  decorators: [
    moduleMetadata({
      imports: [NgxMaskModule.forRoot()],
    }),
  ],
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    id: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    testId: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    label: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    helperText: {
      control: { type: 'text' },
      description: 'opcional',
      defaultValue: { summary: '(vazio)' },
    },
    errorText: {
      control: { type: 'text' },
      description: 'Esta prop é para forçar algum erro que não esteja mapeado em CustomValidatorMessages',
      defaultValue: { summary: '(vazio)' },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputPhoneComponent>;

const form: FormGroup = new FormGroup({
  phone: new FormControl('', []),
});

delete form['controls']['phone']['_parent'];

export const Default: Story = {
  args: {
    control: form.get('phone') as FormControl,
    state: 'default',
    id: 'phone',
    testId: 'flags',
    label: 'Telefone',
    helperText: '',
    errorText: '',
    readOnly: false,
  },
};
