import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSLoadingSpinningDirective } from "@bs2/design-system/directives/bs2-ds-loading-spinning";

const meta: Meta<Bs2DSLoadingSpinningDirective> = {
  component: Bs2DSLoadingSpinningDirective,
  title: 'Directives/Loading Spinning',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Também conhecido como loader, é um dos componentes visuais utilizado para indicar que um processo está em andamento, como o carregamento de uma página ou a execução de uma ação ou tarefa. Serve para fornecer feedback ao usuário, evitando incertezas sobre o status do sistema e melhorando a experiência ao criar uma sensação de progresso enquanto a tarefa é concluída.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSLoadingSpinningDirective],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 100%; }`],
    }),
  ],
  argTypes: {
    loader: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    dynamic: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    loaderBG: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
          detail: 'Use hexadecimal, cores padrões ou até variaveis de css. Ex: #f5f5f5 | red | neutral_n2',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSLoadingSpinningDirective>;

export const Filled: Story = {
  render: (args) => ({
    styles: [
      `
      .sm{ padding:5px; text-align:center; border: 1px solid red; }
      .md{ padding:5px; text-align:center; border: 1px solid red; }
      .lg{ padding:5px; text-align:center; border: 1px solid red; width: 300px; height: 300px; }
    `,
    ],
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSLoadingSpinningDirective } from "@bs2/design-system/directives/bs2-ds-loading-spinning";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSLoadingSpinningDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<div style='display:flex'>
  <div class="sm" [bs2-ds-loading-spinning]='${args.loader}' [dynamic]='${args.dynamic}'>
    primeiro adaptavel
  </div>
  <div class="md" [bs2-ds-loading-spinning]='${args.loader}' [dynamic]='${args.dynamic}' loaderBG='${args.loaderBG}'>
    segundo com tamanho adaptavel um pouco maior
  </div>
  <div class="lg" [bs2-ds-loading-spinning]='${args.loader}' [dynamic]='${args.dynamic}'>
      terceiro tamanho fixo 300px x 300px
  </div>
</div>
    `,
  }),
};
