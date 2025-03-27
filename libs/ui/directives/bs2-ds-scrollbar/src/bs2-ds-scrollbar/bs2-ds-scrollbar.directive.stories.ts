import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { Bs2DSScrollbarDirective } from './bs2-ds-scrollbar.directive';

@Component({
  selector: 'bs2-ds-scrollbar-mock',
  styles: `
    .wrapper{ height:300px; overflow: auto; }
  `,
  template: `
    <div class="wrapper" bs2-ds-scrollbar>
      @for(item of array; track item){
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis?
      </p>
      }
    </div>
  `,
  imports: [Bs2DSScrollbarDirective],
  standalone: true,
})
class MockBs2DSScrollbarComponent {
  public array = Array(20)
    .fill(0)
    .map((i, key) => key);
}

const meta: Meta<MockBs2DSScrollbarComponent> = {
  component: MockBs2DSScrollbarComponent,
  title: 'Directives/Scrollbar',
  subcomponents: {
    Bs2DSScrollbarDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [MockBs2DSScrollbarComponent, Bs2DSScrollbarDirective],
    }),
  ],
};
export default meta;
type Story = StoryObj<MockBs2DSScrollbarComponent>;

export const Filled: Story = {
  render: (args) => ({
    template: `<bs2-ds-scrollbar-mock />`,
  }),
};
