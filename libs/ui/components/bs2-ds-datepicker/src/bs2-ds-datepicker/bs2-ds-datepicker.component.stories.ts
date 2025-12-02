import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSDatepickerComponent } from '@bs2/design-system/components/bs2-ds-datepicker';
import { CustomValidators } from '@bs2/design-system/validators';
import { FormControl, FormGroup } from '@angular/forms';

const meta: Meta<Bs2DSDatepickerComponent> = {
  component: Bs2DSDatepickerComponent,
  title: 'Form Components/Datepicker',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Este componente de interface que permite aos usuários selecionar datas de forma prática e visual, geralmente exibindo um calendário interativo. Ele é utilizado em situações onde é necessário escolher uma data específica, como agendamentos, prazos ou filtros de período. Sua função é melhorar a usabilidade e precisão na seleção de datas, minimizando erros de entrada e proporcionando uma experiência mais eficiente e intuitiva.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSDatepickerComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 300px; }`],
    }),
  ],
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
      table: { type: { summary: 'FormControl' } },
    },
    min: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'Date' } },
    },
    max: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'Date' } },
    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
      defaultValue: { summary: 'left' },
      table: { type: { summary: "'left' | 'right" } },
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: "'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled'" } },
    },
    id: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    label: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    class: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    leftIcon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    rightIcon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    errorText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    ariaRequired: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    ariaInvalid: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSDatepickerComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    min: new Date('1900-01-01T03:00:00.000Z'),
    max: new Date('2100-12-31T03:00:00.000Z'),
    state: 'default',
    direction: 'left',
    id: '',
    label: 'Data de nascimento',
    class: '',
    leftIcon: '',
    rightIcon: 'h',
    helperText: 'Digite sua data de aniversário',
    errorText: '',
    placeholder: 'Ex: 31/01/2024',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    disabled: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSDatepickerComponent } from "@bs2/design-system/components/bs2-ds-datepicker";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSDatepickerComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
  public direction: 'left' | 'right' = 'left';
  public id: string = '';
  public label: string = 'Descrição';
  public class: string = '';
  public leftIcon: string = '';
  public rightIcon: string = '';
  public helperText: string = '';
  public errorText: string = '';
  public placeholder: string = '';
  public readOnly: boolean = false;
  public ariaLabel: string = '';
  public ariaRequired: boolean = false;
  public ariaInvalid: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-datepicker
  [control]="control"
  [disabled]="disabled"
  [state]="state"
  [id]="id"
  [label]="label"
  [class]="class"
  [leftIcon]="leftIcon"
  [rightIcon]="rightIcon"
  [helperText]="helperText"
  [errorText]="errorText"
  [placeholder]="placeholder"
  [readOnly]="readOnly"
  [ariaLabel]="ariaLabel"
  [ariaRequired]="ariaRequired"
  [ariaInvalid]="ariaInvalid"
/>
    `,
  }),
};

export const MinMax: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    min: new Date('2025-01-15T03:00:00.000Z'),
    max: new Date('2025-01-30T03:00:00.000Z'),
    state: 'default',
    direction: 'left',
    id: '',
    label: 'Data de nascimento',
    class: '',
    leftIcon: '',
    rightIcon: 'h',
    helperText: 'Digite sua data de aniversário',
    errorText: '',
    placeholder: 'Ex: 31/01/2024',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    disabled: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSDatepickerComponent } from "@bs2/design-system/components/bs2-ds-datepicker";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSDatepickerComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
  public direction: 'left' | 'right' = 'left';
  public id: string = '';
  public label: string = 'Descrição';
  public class: string = '';
  public leftIcon: string = '';
  public rightIcon: string = '';
  public helperText: string = '';
  public errorText: string = '';
  public placeholder: string = '';
  public readOnly: boolean = false;
  public ariaLabel: string = '';
  public ariaRequired: boolean = false;
  public ariaInvalid: boolean = false;
  public min?: Date = new Date('2025-01-15T03:00:00.000Z');
  public min?: Date = new Date('2025-01-30T03:00:00.000Z');
}
-->

<!-- HTML -->
<bs2-ds-datepicker
  [control]="control"
  [min]="min"
  [max]="max"
  [disabled]="disabled"
  [state]="state"
  [id]="id"
  [label]="label"
  [class]="class"
  [leftIcon]="leftIcon"
  [rightIcon]="rightIcon"
  [helperText]="helperText"
  [errorText]="errorText"
  [placeholder]="placeholder"
  [readOnly]="readOnly"
  [ariaLabel]="ariaLabel"
  [ariaRequired]="ariaRequired"
  [ariaInvalid]="ariaInvalid"
/>
    `,
  }),
};
