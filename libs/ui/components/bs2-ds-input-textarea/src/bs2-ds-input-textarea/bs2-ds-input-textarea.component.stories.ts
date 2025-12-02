import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTextareaComponent } from '@bs2/design-system/components/bs2-ds-input-textarea';
import { FormControl } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const meta: Meta<Bs2DSInputTextareaComponent> = {
  component: Bs2DSInputTextareaComponent,
  title: 'Form Components/InputTextArea',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os campos de input text, select, dropdown e textarea são componentes essenciais para entrada de dados, permitindo aos usuários inserir, selecionar opções de forma intuitiva e acessível.
          Normalmente usados em formulários, são projetados para manter a consistência visual, com tipografia legível, espaçamento adequado e indicadores visuais para estados como foco, erro e sucesso. Padrões de bordas, cores e mensagens auxiliares orientam a interação, oferecendo feedback claro e garantindo uma experiência de coleta de dados eficiente e fluida na interface, facilitando tanto escolhas simples quanto múltiplas.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSInputTextareaComponent],
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
    },
    autosize: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    resize: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: { summary: '1' },
      table: { type: { summary: 'number' } },
    },
    maxLength: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: { type: { summary: 'number' } },
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
type Story = StoryObj<Bs2DSInputTextareaComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    state: 'default',
    id: 'description',
    autosize: false,
    resize: false,
    rows: 1,
    maxLength: 300,
    label: 'Descrição',
    class: '',
    leftIcon: '',
    rightIcon: '',
    helperText: '',
    errorText: '',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputTextareaComponent } from "@bs2/design-system/components/bs2-ds-input-textarea";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSInputTextareaComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
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
  public maxLength: number = 300;
  public autosize: number = true;
  public resize: boolean = false;
  public rows: number = 1;
}
-->

<!-- HTML -->
<bs2-ds-input-textarea
  [control]="control"
  [rows]="rows"
  [maxLength]="maxLength"
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
