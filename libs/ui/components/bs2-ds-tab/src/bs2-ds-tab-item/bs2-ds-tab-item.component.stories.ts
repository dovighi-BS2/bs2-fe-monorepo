import { Bs2DSTabGroupComponent } from './../bs2-ds-tab-group/bs2-ds-tab-group.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSFilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-outlined-button';
import { Bs2DSFlatButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-flat-button';
import { within } from '@storybook/test';
import { Component } from '@angular/core';
import { Bs2DSTabItemComponent } from './bs2-ds-tab-item.component';

@Component({
  selector: 'button-mock',
  template: `
    <bs2-ds-tab-group selectedTab="Tab 3">
      <bs2-ds-tab-item title="Tab 1">Tab 11</bs2-ds-tab-item>
      <bs2-ds-tab-item title="Tab 2" [isActive]="true">Tab 22</bs2-ds-tab-item>
      <bs2-ds-tab-item title="Tab 3">Tab 33</bs2-ds-tab-item>
    </bs2-ds-tab-group>
  `,
  imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent],
  standalone: true,
})
class MockTabComponent {}

const meta: Meta<MockTabComponent> = {
  component: MockTabComponent,
  title: 'Components/Tabs',
  subcomponents: {
    Bs2DSFilledButtonDirective,
    Bs2DSOutlinedButtonDirective,
    Bs2DSFlatButtonDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [MockTabComponent, Bs2DSTabGroupComponent, Bs2DSTabItemComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<MockTabComponent>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
  },
};
