import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSTagComponent } from '@bs2/design-system/components/bs2-ds-tag';

const meta: Meta<Bs2DSTagComponent> = {
  component: Bs2DSTagComponent,
  title: 'Components/Tag',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Similar aos chips, em geral sao pequenos rótulos usados dentro ou próximo a outro componente de interface maior, representando um status, propriedade ou alguns outros metadados.
          São componentes compactos e visualmente distintos com a função de agrupar, organizar e destacar pequenas unidades de informações como categorias, seleções, filtros ou sinalizar o cumprimento de um requisito, permitindo exibir as escolhas ou ações do usuário em espaços reduzidos. Podem incluir texto, ícones ou ambos, proporcionando uma experiência visual coesa  e oferecendo uma forma prática de condensar dados.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSTagComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 100%; }`],
    }),
  ],
  argTypes: {
    status: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'attention', 'error'],
      defaultValue: { summary: 'neutral' },
      table: { type: { summary: "'primary' | 'neutral' | 'success' | 'attention' | 'error'" } },
    },
    size: {
      control: 'select',
      options: ['regular', 'small'],
      defaultValue: { summary: 'neutral' },
      table: { type: { summary: "'regular' | 'small'" } },
    },
    text: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSTagComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    size: 'regular',
    text: 'Seu texto aqui',
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTagComponent } from "@bs2/design-system/components/bs2-ds-tag";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTagComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-tag [status]="status" [size]="size" [text]="text" />
    `,
  }),
};
