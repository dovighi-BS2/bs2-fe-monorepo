import { Bs2DSButtonSelectorTriggerDirective } from './src/bs2-ds-button-selector-trigger/bs2-ds-button-selector-trigger.directive';
import { Bs2DSButtonSelectorDirective } from './src/bs2-ds-button-selector/bs2-ds-button-selector.directive';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';

@Component({
  selector: 'mock-button-selector',
  imports: [Bs2DSFlatButtonDirective, Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective],
  template: `
    <h3>Importante!</h3>
    <p>
      Storybook parece interferir no funcionamento real da diretive.
      Recomendamos selecionar o menu DIRECTIVES/BUTTON SELECTOR/DEFAULT para uma melhor experiência
    </p>
    <button bs2-ds-flat-button [bs2-ds-button-selector-trigger]="menu1">exemplo</button>

    <div bs2-ds-button-selector #menu1="bs2-ds-button-selector" [direction]='direction'>
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
  standalone: true,
})
class MockButtonSelectorComponent {
  @Input() direction: 'right' | 'left' = 'left';
}

const meta: Meta<MockButtonSelectorComponent> = {
  component: MockButtonSelectorComponent,
  title: 'Directives/Button Selector',
  subcomponents: {
    Bs2DSButtonSelectorDirective,
    Bs2DSButtonSelectorTriggerDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockButtonSelectorComponent,
        Bs2DSButtonSelectorDirective,
        Bs2DSButtonSelectorTriggerDirective
      ],
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
type Story = StoryObj<MockButtonSelectorComponent>;

export const Default: Story = {

};
