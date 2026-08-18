import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTokenComponent } from './bs2-ds-input-token.component';
import { FormControl } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

const meta: Meta<Bs2DSInputTokenComponent> = {
  component: Bs2DSInputTokenComponent,
  title: 'Form Components/InputToken',
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
      imports: [Bs2DSInputTokenComponent],
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
    amount: {
      control: { type: 'number' },
      defaultValue: { summary: 6 },
      table: { type: { summary: 'number' } },
    },
    class: {
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
    hideErrors: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputTokenComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    state: 'default',
    label: '',
    amount: 6,
    helperText: '',
    errorText: '',
    id: 'token',
    class: '',
    hideErrors: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputTokenComponent } from "@bs2/design-system/components/bs2-ds-input-token";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSInputTokenComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
  public id: string = '';
  public label: string = '';
  public class: string = '';
  public helperText: string = '';
  public errorText: string = '';
  public hideCheckbox: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-input-token
  [control]="control"
  [state]="state"
  [label]="label"
  [amount]="amount"
  [helperText]="helperText"
  [errorText]="errorText"
  [id]="id"
  [class]="class"
  [hideErrors]="hideErrors"
/>
    `,
  }),
};
