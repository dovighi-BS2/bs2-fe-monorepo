import { Component, Input } from '@angular/core';
import { Bs2DSCardProductComponent } from './bs2-ds-card-product.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { delay, finalize, of } from 'rxjs';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@Component({
  selector: 'father-simulation',
  styles: `:host{ display:block; width: 231px; }`,
  template: `<bs2-ds-card-product
    [testId]="testId"
    [loader]="loader"
    [unavailableTitle]="unavailableTitle"
    [icon]="icon"
    [title]="title"
    [label]="label"
    [value]="value"
    [text]="text"
    [template]="template"
    (update)="update()"
  />`,
  standalone: true,
  imports: [Bs2DSCardProductComponent],
})
class FatherSimulationComponent {
  @Input() testId? = '';
  @Input() loader? = false;
  @Input() unavailableTitle? = '';
  @Input() icon? = '';
  @Input() title? = '';
  @Input() label? = '';
  @Input() value?: number;
  @Input() text? = '';
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
        this.value = rand(1, 1000000000);
      });
  }
}

const meta: Meta<FatherSimulationComponent> = {
  component: FatherSimulationComponent,
  title: 'Components/Card Product',
  // tags: ['autodocs'],
  subcomponents: {
    Bs2DSCardProductComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [FatherSimulationComponent, Bs2DSCardProductComponent],
    }),
  ],
  argTypes: {
    loader: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'false',
        },
      },
    },
    unavailableTitle: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    text: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
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

export const Visible: Story = {
  args: {
    title: 'Crédito',
    label: 'Limite disponível até',
    value: 50000,
  },
};

export const Hidden: Story = {
  args: {
    title: 'Crédito',
    label: 'Limite disponível até',
    value: 50000,
    template: 'hidden',
  },
};

export const TextOnly: Story = {
  args: {
    title: 'Label',
    text: 'Lorem ipsum pimentbus ardentis queimatuns est labiatuns',
    testId: '',
  },
};

export const Unavailable: Story = {
  args: {
    unavailableTitle: 'Unavailable title',
    title: 'Crédito',
    label: 'Limite disponível até',
    template: 'unavailable',
    testId: '',
  },
};
