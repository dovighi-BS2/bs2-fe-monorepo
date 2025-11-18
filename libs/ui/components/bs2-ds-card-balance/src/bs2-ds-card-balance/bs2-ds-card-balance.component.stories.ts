import { Bs2DSCardBalanceComponent } from './bs2-ds-card-balance.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

const meta: Meta<Bs2DSCardBalanceComponent> = {
  component: Bs2DSCardBalanceComponent,
  title: 'Components/Card Balance',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `O card é um componente que agrupa informações relacionadas em um contêiner visual, geralmente com bordas, sombra ou espaçamento definidos. Ele é usado para organizar conteúdos como textos, imagens, links ou ações, destacando e estruturando informações de forma clara e acessível, facilitando a leitura e a interação. O card de saldo do Banco BS2 exibe o saldo, o limite (sempre que houver), a possibilidade de exibir/ocultar o saldo e um link para o extrato.`,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSCardBalanceComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 300px; }`],
    }),
  ],
  argTypes: {
    balance: { control: 'number', defaultValue: { summary: '0' } },
    limit: { control: 'number', defaultValue: { summary: '0' } },
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
          summary: 'boolean',
        },
      },
    },
    update: {
      action: 'Evento emitido pelo componente',
      defaultValue: { summary: 'new EventEmitter<boolean>()' },
      table: {
        type: { summary: 'EventEmitter<boolean>' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<Bs2DSCardBalanceComponent>;

export const Default: Story = {
  args: {
    balance: 1000000000.12,
    limit: 3000000000.23,
    template: 'hidden',
    loader: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <bs2-ds-card-balance
        [balance]="balance"
        [limit]="limit"
        [template]="template"
        [loader]="loader"
      ></bs2-ds-card-balance>
    `,
  }),
};

export const Visible: Story = {
  render: (args) => ({
    template: `
      <bs2-ds-card-balance
        [balance]="1000000000.12"
        [limit]="3000000000.23"
        [template]="'visible'"
        [loader]="false"
      ></bs2-ds-card-balance>
    `,
  }),
};

export const Hidden: Story = {
  args: {
    balance: 1000000000.12,
    limit: 3000000000.23,
    template: 'hidden',
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <bs2-ds-card-balance
        [balance]="1000000000.12"
        [limit]="3000000000.23"
        [template]="'hidden'"
        [loader]="false"
      ></bs2-ds-card-balance>
    `,
  }),
};

export const Unavailable: Story = {
  args: {
    template: 'unavailable',
    loader: false,
    balance: 0,
    limit: 0,
    update: function () {
      this.loader = true;

      of(null)
        .pipe(
          delay(3000),
          finalize(() => (this.loader = false))
        )
        .subscribe(() => {
          this.template = 'visible';
          this.balance = Math.floor(Math.random() * 1000);
          this.limit = Math.floor(Math.random() * 3000);
        });
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <bs2-ds-card-balance
        [loader]="loader"
        [balance]="balance"
        [limit]="limit"
        [template]="template"
        (update)="update($event)"
      ></bs2-ds-card-balance>
    `,
  }),
};
