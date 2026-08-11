import { Bs2DSCardBalanceComponent } from '@bs2/design-system/components/bs2-ds-card-balance';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

const meta: Meta<Bs2DSCardBalanceComponent> = {
  component: Bs2DSCardBalanceComponent,
  title: 'Components/Card Balance',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          O card é um componente que agrupa informações relacionadas em um contêiner visual, geralmente com bordas, sombra ou espaçamento definidos. Ele é usado para organizar conteúdos como textos, imagens, links ou ações, destacando e estruturando informações de forma clara e acessível, facilitando a leitura e a interação. O card de saldo do Banco BS2 exibe o saldo, o limite (sempre que houver), a possibilidade de exibir/ocultar o saldo e um link para o extrato.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSCardBalanceComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    balance: { control: 'number', defaultValue: { summary: '0' }, table: { type: { summary: 'number' } } },
    limit: { control: 'number', defaultValue: { summary: '0' }, table: { type: { summary: 'number' } } },
    title: {
      control: { type: 'text' },
      defaultValue: { summary: 'Saldo em conta' },
      table: { type: { summary: 'string' } },
    },
    balanceLabel: {
      control: { type: 'text' },
      defaultValue: { summary: 'Total investido' },
      table: { type: { summary: 'string' } },
    },
    unavailableTitle: {
      control: { type: 'text' },
      defaultValue: { summary: 'Saldo indisponível no momento' },
      table: { type: { summary: 'string' } },
    },
    buttonLabel: {
      control: { type: 'text' },
      defaultValue: { summary: 'Atualizar' },
      table: { type: { summary: 'string' } },
    },
    actionLabel: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string | null' } },
    },
    showIcon: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    showLimit: {
      control: 'boolean',
      defaultValue: { summary: 'true' },
      table: { type: { summary: 'boolean' } },
    },
    template: {
      control: 'select',
      options: ['visible', 'hidden', 'unavailable'],
      defaultValue: { summary: 'visible' },
      table: { type: { summary: "'visible' | 'hidden' | 'unavailable'" } },
    },
    loader: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    emitter: {
      action: 'Evento emitido pelo componente',
      defaultValue: { summary: 'new EventEmitter<boolean>()' },
      table: { type: { summary: 'EventEmitter<boolean>' } },
    },
    actionClick: {
      action: 'Evento de ação emitido pelo componente',
      table: { type: { summary: 'EventEmitter<void>' } },
    },
  },
};
export default meta;

type Story = StoryObj<Bs2DSCardBalanceComponent>;

export const Default: Story = {
  args: {
    balance: 1000000000.12,
    limit: 3000000000.23,
    title: 'Saldo em conta',
    balanceLabel: 'Total investido',
    unavailableTitle: 'Saldo indisponível no momento',
    buttonLabel: 'Atualizar',
    actionLabel: null,
    showIcon: false,
    showLimit: true,
    template: 'visible',
    loader: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardBalanceComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardBalanceComponent], ... })
export class YourComponentComponent {
    public balance: number = 1000000000.12;
    public limit: number = 3000000000.23;
    public title: string = "Saldo em conta";
    public balanceLabel: string = "Total investido";
    public unavailableTitle: string = "Saldo indisponível no momento";
    public buttonLabel: string = "Atualizar";
    public actionLabel: string | null = null;
    public showIcon: boolean = false;
    public showLimit: boolean = true;
    public template: 'visible' | 'hidden' | 'unavailable' = "visible";
    public loader: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-card-balance
  [balance]="balance"
  [limit]="limit"
  [title]="title"
  [balanceLabel]="balanceLabel"
  [unavailableTitle]="unavailableTitle"
  [buttonLabel]="buttonLabel"
  [actionLabel]="actionLabel"
  [showIcon]="showIcon"
  [showLimit]="showLimit"
  [template]="template"
  [loader]="loader"
></bs2-ds-card-balance>
    `,
  }),
};

export const Visible: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardBalanceComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardBalanceComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-balance
  [balance]="1000000000.12"
  [limit]="3000000000.23"
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
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardBalanceComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardBalanceComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-balance
  [balance]="1000000000.12"
  [limit]="3000000000.23"
  [template]="'hidden'"
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
    emitter: function () {
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
        [balance]="balance"
        [limit]="limit"
        [template]="template"
        [loader]="loader"
        (emitter)="emitter($event)"
      ></bs2-ds-card-balance>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardBalanceComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardBalanceComponent], ... })
export class YourComponentComponent {
  public balance: number = 0;
  public limit: number = 0;
  public loader: boolean = false;
  public emitter(): void {
    this.loader = true;
    of(null)
      .pipe(
        delay(3000),
        finalize(() => (this.loader = false))
      )
      .subscribe(() => {
        this.template = "visible";
        this.balance = Math.floor(Math.random() * 1000);
        this.limit = Math.floor(Math.random() * 3000);
      });
  }
}
-->

<!-- HTML -->
<bs2-ds-card-balance
  [balance]="balance"
  [limit]="limit"
  [template]="template"
  [loader]="loader"
  (emitter)="emitter($event)"
></bs2-ds-card-balance>
          `.trim(),
      },
    },
  },
};
