import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSProgressBarComponent } from '@bs2/design-system/components/bs2-ds-progress-bar';

const meta: Meta<Bs2DSProgressBarComponent> = {
  component: Bs2DSProgressBarComponent,
  title: 'Components/Progress Bar',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Tem a mesma função que o spinner, sendo um componente visual utilizado para indicar que um processo está em andamento, como o carregamento de uma página ou a execução de uma ação ou tarefa. Serve para fornecer feedback ao usuário, evitando incertezas sobre o status do sistema e melhorando a experiência ao criar uma sensação de progresso enquanto a tarefa é concluída.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSProgressBarComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    percent: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: { type: { summary: 'number' } },
    },
    loop: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSProgressBarComponent>;

export const Default: Story = {
  args: {
    percent: 50,
    loop: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSProgressBarComponent } from "@bs2/design-system/components/bs2-ds-progress-bar";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSProgressBarComponent], ... })
export class YourComponentComponent {
    public percent: number = 50;
    public loop: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-progress-bar [percent]="percent" [loop]="loop" />
    `,
  }),
};
