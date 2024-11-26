import { Component, Input } from '@angular/core';
import { CardBalanceComponent } from './card-balance.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { delay, finalize, of } from 'rxjs';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@Component({
  selector: 'father-simulation',
  template: `<card-balance
    [loader]="loader"
    [testId]="testId"
    [balance]="balance"
    [limit]="limit"
    [template]="template"
    (update)="update()"
  />`,
  standalone: true,
  imports: [CardBalanceComponent],
})
class FatherSimulationComponent {
  @Input() loader? = false;
  @Input() testId? = '';
  @Input() balance? = 0;
  @Input() limit? = 0;
  @Input() template: 'visible' | 'hidden' | 'unavailable' = 'visible';

  update() {
    this.loader = true;
    of(null)
      .pipe(
        delay(3000),
        finalize(() => (this.loader = false))
      )
      .subscribe((_) => {
        this.template = 'visible';
        this.balance = rand(1, 1000000000);
        this.limit = rand(1, 300000000);
      });
  }
}

const meta: Meta<FatherSimulationComponent> = {
  component: FatherSimulationComponent,
  title: 'Components/Card Balance',
  // tags: ['autodocs'],
  subcomponents: {
    CardBalanceComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [FatherSimulationComponent, CardBalanceComponent],
    }),
  ],
  argTypes: {
    balance: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    limit: {
      control: { type: 'number' },
      defaultValue: { summary: '0' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    template: {
      control: 'select',
      options: ['visible', 'hidden', 'unavailable'],
      defaultValue: { summary: 'visible' },
      table: {
        type: {
          summary: 'visible | hidden | unavailable',
        },
      },
    },
    loader: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'false',
        },
      },
    },
    update: {
      // control: 'boolean',
      defaultValue: { summary: 'EventEmitter' },
      table: {
        type: {
          detail:
            "APENAS para documentação, esse EventEmitter esta setando [template='visible'] após um Observable de 3000ms.",
          summary: 'new EventEmitter',
        },
      },
    },
    testId: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<FatherSimulationComponent>;

export const Default: Story = {
  args: {
    balance: 1000000000.12,
    limit: 3000000000.23,
    loader: false,
    template: 'visible',
  },
};
