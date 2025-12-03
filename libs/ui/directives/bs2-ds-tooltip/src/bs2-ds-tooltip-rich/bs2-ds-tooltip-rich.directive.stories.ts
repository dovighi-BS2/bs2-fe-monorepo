import { Bs2DSTooltipRichDirective } from './bs2-ds-tooltip-rich.directive';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';

@Component({
  selector: 'tooltip-rich-mock',
  template: ``,
  standalone: true,
})
class MockTooltipComponent {
  @Input() ariaLabel = 'tooltip-rich';
  @Input() tabindex = 0;
}

const meta: Meta<MockTooltipComponent> = {
  component: MockTooltipComponent,
  title: 'Directives/Tooltip Rich',
  decorators: [
    moduleMetadata({
      imports: [
        MockTooltipComponent,
        Bs2DSTooltipRichDirective,
        Bs2DSFilledButtonDirective,
        Bs2DSFlatButtonDirective,
        Bs2DSOutlinedButtonDirective,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<MockTooltipComponent>;

export const Positions: Story = {
  render: (args) => ({
    template: `
      <style>
        button + button { margin-left: 10px; }
      </style>
      <ng-template #tooltipRichTemplate>
        Conteúdo full dinamico!
      </ng-template>

      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
      <br><br>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
      <br><br>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
      <br>
    `,
  }),
};

export const Centered: Story = {
  render: (args) => ({
    template: `
      <ng-template #tooltipRichTemplate>
        Conteúdo full dinamico!
      </ng-template>
      <style> button + button { margin-left: 10px; } </style>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-filled-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
      <br><br>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-flat-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
      <br><br>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
      <button bs2-ds-outlined-button aria-label="button" [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
      <br>
    `,
  }),
};
