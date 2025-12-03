import { Bs2DSTooltipDirective } from './bs2-ds-tooltip.directive';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';

@Component({
  selector: 'tooltip-mock',
  template: ``,
  standalone: true,
})
class MockTooltipComponent {
  @Input() ariaLabel = 'tooltip';
  @Input() tabindex = 0;
}

const meta: Meta<MockTooltipComponent> = {
  component: MockTooltipComponent,
  title: 'Directives/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [
        MockTooltipComponent,
        Bs2DSTooltipDirective,
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
      <style> button + button { margin-left: 10px; } </style>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
      <br><br>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
      <br><br>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
      <br>
    `,
  }),
};

export const Centered: Story = {
  render: (args) => ({
    template: `
      <style> button + button { margin-left: 10px; } </style>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
      <button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
      <br><br>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
      <button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
      <br><br>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
      <button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
      <br>
    `,
  }),
};
