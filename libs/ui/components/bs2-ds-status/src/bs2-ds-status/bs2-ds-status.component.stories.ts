import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSStatusComponent } from '@bs2/design-system/components/bs2-ds-status';

const meta: Meta<Bs2DSStatusComponent> = {
  component: Bs2DSStatusComponent,
  title: 'Components/Status',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          O indicador de estado é um componente que comunica visualmente o status de uma ação, processo ou mensagem. Ele utiliza estados como sucesso (confirmação de uma ação concluída), neutro (informação padrão sem destaque), alerta (atenção a algo importante) e erro (indicação de falha ou problema). Sua função é fornecer feedback claro e imediato, ajudando o usuário a entender a situação e tomar decisões rapidamente.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSStatusComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 100%; }`],
    }),
  ],
  argTypes: {
    status: {
      control: 'select',
      options: ['neutral', 'success', 'attention', 'error'],
      defaultValue: { summary: 'neutral' },
      table: { type: { summary: "'neutral' | 'success' | 'attention' | 'error'" } },
    },
    text: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSStatusComponent>;

export const Default: Story = {
  args: {
    status: 'neutral',
    text: 'Seu texto aqui',
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStatusComponent } from "@bs2/design-system/components/bs2-ds-status";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStatusComponent], ... })
export class YourComponentComponent {
    public text: string = 'Seu Texto aqui';
    public status: 'neutral' | 'success' | 'attention' | 'error' = 'neutral';
}
-->

<!-- HTML -->
<bs2-ds-status [status]="status" [text]="text" />
    `,
  }),
};
