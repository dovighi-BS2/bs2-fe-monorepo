import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2FilledButtonDirective } from './bs2-filled-button/bs2-filled-button.directive';
import { Bs2OutlinedButtonDirective } from './bs2-outlined-button/bs2-outlined-button.directive';
import { Bs2FlatButtonDirective } from './bs2-flat-button/bs2-flat-button.directive';
import { within } from '@storybook/testing-library';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-button-mock',
  template: ``,
  standalone: true,
})
class MockBs2ButtonComponent {
  @Input() ariaLabel = 'button';
  @Input() tabindex = 0;
}

const meta: Meta<MockBs2ButtonComponent> = {
  component: MockBs2ButtonComponent,
  title: 'Directives/Bs2Button',
  // tags: ['autodocs'],
  subcomponents: {
    Bs2FilledButtonDirective,
    Bs2OutlinedButtonDirective,
    Bs2FlatButtonDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockBs2ButtonComponent,
        Bs2FilledButtonDirective,
        Bs2OutlinedButtonDirective,
        Bs2FlatButtonDirective,
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
type Story = StoryObj<MockBs2ButtonComponent>;

export const Filled: Story = {
  render: (args) => ({
    template: `<button bs2-filled-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Outlined: Story = {
  render: (args) => ({
    template: `<button bs2-outlined-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Flat: Story = {
  render: (args) => ({
    template: `<button bs2-flat-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
  },
};
