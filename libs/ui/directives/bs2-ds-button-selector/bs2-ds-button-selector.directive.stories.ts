import { Bs2DSButtonSelectorTriggerDirective } from './src/bs2-ds-button-selector-trigger/bs2-ds-button-selector-trigger.directive';
import { Bs2DSButtonSelectorDirective } from './src/bs2-ds-button-selector/bs2-ds-button-selector.directive';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';

@Component({
  selector: 'mock-button-selector',
  imports: [Bs2DSFlatButtonDirective, Bs2DSButtonSelectorDirective, Bs2DSButtonSelectorTriggerDirective],
  template: `
    <section style="width:100%; height: 75dvh; border: 1px solid red;"></section>
    <button bs2-ds-flat-button [bs2-ds-button-selector-trigger]="menu1">botao 1</button>

    <div bs2-ds-button-selector #menu1="bs2-ds-button-selector">
      <button>opção item 1</button>
      <button>opção item 2</button>
      <button>opção item 3</button>
    </div>

    <button bs2-ds-flat-button  [bs2-ds-button-selector-trigger]="menu2">botao 2</button>

    <div bs2-ds-button-selector #menu2="bs2-ds-button-selector">
      <button>opção item 11</button>
      <button>opção item 22</button>
      <button>opção item 33</button>
    </div>
    <section style="width:100%; height: 75dvh; border: 1px solid red;"></section>
  `,
  standalone: true,
})
class MockButtonSelectorComponent {}

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
  argTypes: {},
};
export default meta;
type Story = StoryObj<MockButtonSelectorComponent>;

export const Default: Story = {

};
