import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FilledButtonDirective } from './filled-button/filled-button.directive';
import { OutlinedButtonDirective } from './outlined-button/outlined-button.directive';
import { FlatButtonDirective } from './flat-button/flat-button.directive';
import { within } from '@storybook/testing-library';
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
  // tags: ['autodocs'],
  subcomponents: {
    FilledButtonDirective,
    OutlinedButtonDirective,
    FlatButtonDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockButtonComponent,
        FilledButtonDirective,
        OutlinedButtonDirective,
        FlatButtonDirective,
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
    template: `<button filled-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Outlined: Story = {
  render: (args) => ({
    template: `<button outlined-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Flat: Story = {
  render: (args) => ({
    template: `<button flat-button aria-label='${args.ariaLabel}' tabindex='${args.tabindex}'>button</button>`,
  }),
};

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
  },
};
