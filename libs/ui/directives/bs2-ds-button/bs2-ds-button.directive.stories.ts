import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSFilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-outlined-button';
import { Bs2DSFlatButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-flat-button';
import { within } from '@storybook/test';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-mock',
  template: ``,
  standalone: true,
})
class MockButtonComponent {
  @Input() ariaLabel = 'button';
  @Input() tabindex = 0;
}

const meta: Meta<MockButtonComponent> = {
  component: MockButtonComponent,
  title: 'Directives/Button',
  subcomponents: {
    Bs2DSFilledButtonDirective,
    Bs2DSOutlinedButtonDirective,
    Bs2DSFlatButtonDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockButtonComponent,
        Bs2DSFilledButtonDirective,
        Bs2DSOutlinedButtonDirective,
        Bs2DSFlatButtonDirective,
      ],
    }),
  ],
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    tabindex: {
      control: { type: 'inline-radio' },
      defaultValue: 0,
      options: [0, -1],
    },
  },
};
export default meta;
type Story = StoryObj<MockButtonComponent>;

export const Filled: Story = {
  render: (args) => ({
    template: `<button bs2-ds-filled-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Outlined: Story = {
  render: (args) => ({
    template: `<button bs2-ds-outlined-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Flat: Story = {
  render: (args) => ({
    template: `<button bs2-ds-flat-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
  },
};
