import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective } from "@bs2/design-system/directives/bs2-ds-button-selector";

@Component({
  selector: 'bs2-ds-button-selector-mock',
  template: ``,
  standalone: true,
})
class Bs2DSButtonSelectorMockComponent {
  @Input() direction: 'right' | 'left' = 'left';
}

const meta: Meta<Bs2DSButtonSelectorMockComponent> = {
  component: Bs2DSButtonSelectorMockComponent,
  title: 'Directives/Button Selector',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Um dropdown é um componente de interface usado para apresentar uma lista de opções de forma compacta, sendo exibida apenas quando o usuário interage com o elemento. Ele é utilizado especialmente quando há muitas opções a escolher e pouco espaço disponível na tela, permitindo selecionar um item sem sobrecarregar a interface. Sua principal vantagem é a economia de espaço, além de organizar informações ou ações relacionadas de maneira clara e acessível. Também contribui para evitar erros, já que limita as escolhas a valores pré-definidos. Por ser um padrão de uso amplamente conhecido, torna a interação mais intuitiva e consistente em diferentes aplicações.
          <br/><br />
          IMPORTANTE! <br />
          Storybook parece interferir no funcionamento real da diretive. Recomendamos selecionar o menu DIRECTIVES/BUTTON SELECTOR/DEFAULT para uma melhor experiência.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        Bs2DSButtonSelectorMockComponent,
        Bs2DSFlatButtonDirective,
        Bs2DSButtonSelectorDirective,
        Bs2DSButtonSelectorTriggerDirective,
      ],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    direction: {
      control: 'select',
      options: ['right', 'left'],
      defaultValue: { summary: 'left' },
      table: {
        type: {
          summary: "'right' | 'left'",
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSButtonSelectorMockComponent>;

export const Default: Story = {
  render: (args) => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective } from "@bs2/design-system/directives/bs2-ds-button-selector";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<button bs2-ds-flat-button [bs2-ds-button-selector-trigger]="menu1">exemplo</button>

<div bs2-ds-button-selector direction="${args.direction}" #menu1="bs2-ds-button-selector">
  <button>opção item 1</button>
  <button>opção item 2</button>
  <button>opção item 3</button>
  <button>opção item 4</button>
  <button>opção item 5</button>
  <button>opção item 6</button>
  <button>opção item 7</button>
  <button>opção item 8</button>
  <button>opção item 9</button>
</div>
    `,
  }),
};
