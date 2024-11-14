import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { ScrollbarDirective } from './scrollbar.directive';

@Component({
  selector: 'scrollbar-mock',
  styles: `
    .wrapper{ height:300px; overflow: auto; }
  `,
  template: `
    <div class="wrapper" scrollbar>
      @for(item of array; track item){
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis?
      </p>
      }
    </div>
  `,
  imports: [ScrollbarDirective],
  standalone: true,
})
class MockScrollbarComponent {
  public array = Array(20).fill(0);
}

const meta: Meta<MockScrollbarComponent> = {
  component: MockScrollbarComponent,
  title: 'Directives/Scrollbar',
  subcomponents: {
    ScrollbarDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [MockScrollbarComponent, ScrollbarDirective],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<MockScrollbarComponent>;

export const Filled: Story = {
  render: (args) => ({
    template: `<scrollbar-mock />`,
  }),
};
