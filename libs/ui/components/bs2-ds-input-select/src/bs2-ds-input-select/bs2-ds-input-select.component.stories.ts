import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputSelectComponent } from '@bs2/design-system/components/bs2-ds-input-select';
import { FormControl } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const meta: Meta<Bs2DSInputSelectComponent> = {
  component: Bs2DSInputSelectComponent,
  title: 'Form Components/InputSelect',
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
      imports: [Bs2DSInputSelectComponent],
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
    options: {
      control: { type: 'object' },
      defaultValue: { summary: '[]' },
      table: { type: { summary: 'Bs2DSInputSelectOption[]' } },
    },
    hideCheckbox: {
      control: { type: 'boolean' },
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
type Story = StoryObj<Bs2DSInputSelectComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    state: 'default',
    id: 'categories',
    label: 'Categorias',
    class: '',
    leftIcon: '',
    rightIcon: 'ico-chevron-baixo',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Selecione uma opção',
    readOnly: false,
    options: [
      { value: 1, text: 'Categoria 1' },
      { value: 2, text: 'Categoria 2' },
      { value: 3, text: 'Categoria 3' },
      { value: 4, text: 'Categoria 4' },
      { value: 5, text: 'Categoria 5' },
    ],
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
    hideCheckbox: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputSelectComponent } from "@bs2/design-system/components/bs2-ds-input-select";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSInputSelectComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
  public type: string = 'text';
  public id: string = '';
  public label: string = 'E-mail';
  public class: string = '';
  public leftIcon: string = '';
  public rightIcon: string = '';
  public helperText: string = 'Digite seu e-mail principal.';
  public errorText: string = '';
  public placeholder: string = 'Ex: joao.da.silva@gmail.com';
  public readOnly: boolean = false;
  public options: Bs2DSInputSelectOption[] = [
    { value: 1, text: 'Categoria 1' },
    { value: 2, text: 'Categoria 2' },
    { value: 3, text: 'Categoria 3' },
    { value: 4, text: 'Categoria 4' },
    { value: 5, text: 'Categoria 5' },
  ];
  public ariaLabel: string = '';
  public ariaRequired: boolean = false;
  public ariaInvalid: boolean = false;
  public hideCheckbox: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-input-select
  [control]="control"
  [state]="state"
  [type]="type"
  [id]="id"
  [label]="label"
  [class]="class"
  [leftIcon]="leftIcon"
  [rightIcon]="rightIcon"
  [helperText]="helperText"
  [errorText]="errorText"
  [placeholder]="placeholder"
  [readOnly]="readOnly"
  [options]="options"
  [ariaLabel]="ariaLabel"
  [ariaRequired]="ariaRequired"
  [ariaInvalid]="ariaInvalid"
  [hideCheckbox]="hideCheckbox"
/>
    `,
  }),
};
