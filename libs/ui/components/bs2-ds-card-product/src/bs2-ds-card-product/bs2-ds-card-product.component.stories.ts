import { Bs2DSCardProductComponent } from './bs2-ds-card-product.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { delay, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

const meta: Meta<Bs2DSCardProductComponent> = {
  component: Bs2DSCardProductComponent,
  title: 'Components/Card Product',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          O card de produto é o componente que agrupa informações relacionadas em um contêiner visual com espaçamento definido, sendo usado para organizar conteúdos como textos, imagens, links ou ações, destacando e estruturando informações de forma clara e acessível, facilitando a leitura e a interação. Os cards de produtos do Banco BS2 poderão exibir limites de oferta de crédito, total de boletos emitidos e outros,  podendo ser usados sempre que for necessário exibir detalhes relacionados a produtos, incluindo links para detalhes adicionais relativos aos produtos.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSCardProductComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 231px; }`],
    }),
  ],
  argTypes: {
    unavailableTitle: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    icon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    label: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    value: {
      control: 'number',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number' } },
    },
    template: {
      control: 'select',
      options: ['visible', 'hidden', 'unavailable'],
      defaultValue: { summary: 'visible' },
      table: { type: { summary: 'visible | hidden | unavailable' } },
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
  },
};
export default meta;
type Story = StoryObj<Bs2DSCardProductComponent>;

export const Default: Story = {
  args: {
    loader: false,
    unavailableTitle: '',
    icon: '',
    title: 'Crédito',
    label: 'Limite disponível até',
    value: 50000,
    template: 'visible',
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardProductComponent } from "@bs2/design-system/components/bs2-ds-card-product";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardProductComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-product
  [loader]="loader"
  [unavailableTitle]="unavailableTitle"
  [icon]="icon"
  [title]="title"
  [label]="label"
  [value]="value"
  [template]="template"
></bs2-ds-card-product>
    `,
  }),
};

export const Visible: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardProductComponent } from "@bs2/design-system/components/bs2-ds-card-product";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardProductComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-product
  [title]="'Crédito'"
  [label]="'Limite disponível até'"
  [value]="50000"
></bs2-ds-card-product>
    `,
  }),
};

export const Hidden: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardProductComponent } from "@bs2/design-system/components/bs2-ds-card-product";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardProductComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-product
  [title]="'Crédito'"
  [label]="'Limite disponível até'"
  [value]="50000"
  [template]="'hidden'"
></bs2-ds-card-product>
    `,
  }),
};

export const TextOnly: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardProductComponent } from "@bs2/design-system/components/bs2-ds-card-product";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardProductComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-product
  [title]="'Label'"
  [label]="'Lorem ipsum pimentbus ardentis queimatuns est labiatuns'"
></bs2-ds-card-product>
    `,
  }),
};

export const Unavailable: Story = {
  args: {
    template: 'unavailable',
    value: 0,
    loader: false,
    emitter: function () {
      this.loader = true;

      of(null)
        .pipe(
          delay(3000),
          finalize(() => (this.loader = false))
        )
        .subscribe(() => {
          this.template = 'visible';
          this.value = Math.floor(Math.random() * 1000);
        });
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <bs2-ds-card-product
        [unavailableTitle]="'Unavailable title'"
        [title]="'Crédito'"
        [label]="'Limite disponível até'"
        [template]="template"
        [value]="value"
        [loader]="loader"
        (emitter)="emitter($event)"
      ></bs2-ds-card-product>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardProductComponent } from "@bs2/design-system/components/bs2-ds-card-product";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardProductComponent], ... })
export class YourComponentComponent {
  public template: 'visible' | 'hidden' | 'unavailable' = 'unavailable';
  public value: number = 0;
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
        this.value = Math.floor(Math.random() * 1000);
      });
  }
}
-->

<!-- HTML -->
<bs2-ds-card-product
  [unavailableTitle]="'Unavailable title'"
  [title]="'Crédito'"
  [label]="'Limite disponível até'"
  [template]="template"
  [value]="value"
  [loader]="loader"
  (emitter)="emitter($event)"
></bs2-ds-card-product>
          `.trim(),
      },
    },
  },
};
