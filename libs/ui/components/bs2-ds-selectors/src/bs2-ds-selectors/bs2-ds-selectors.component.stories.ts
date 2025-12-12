import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSSelectorsComponent } from '@bs2/design-system/components/bs2-ds-selectors';
import { FormControl } from '@angular/forms';

const meta: Meta<Bs2DSSelectorsComponent> = {
  component: Bs2DSSelectorsComponent,
  title: 'Form Components/Selectors',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os campos seletores do tipo radio button, checkbox e switch são componentes essenciais para capturar preferências e escolhas do usuário em uma interface. O radio button permite uma única seleção dentro de um conjunto de opções mutuamente exclusivas, enquanto o checkbox possibilita a seleção de múltiplas opções simultâneas. Já o switch é usado para ativar ou desativar um parâmetro específico, um botão de alternância visualmente claro. Esses campos asseguram que as escolhas do usuário sejam intuitivas, rápidas e facilmente reconhecíveis na interface.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSSelectorsComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: max-content; }`],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['radio', 'checkbox', 'switch'],
      defaultValue: { summary: 'checkbox' },
      table: { type: { summary: 'radio | checkbox | switch' } },
    },
    control: {
      defaultValue: { summary: 'new FormControl()' },
      table: {
        type: {
          summary: 'FormControl',
          detail:
            "Para conseguir marcar varios selectors, use um valor inicial de array: new FormControl([])\nPara marcar  apenas um unico selectors, use um valor inicial de '': new FormControl('')",
        },
      },
    },
    value: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'any' } },
    },
    isMain: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    totalItemsCount: {
      control: 'number',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number' } },
    },
    subject: {
      defaultValue: { summary: 'new Subject<any>()' },
      table: { type: { summary: 'Subject<any>' } },
    },
    emitter: {
      defaultValue: { summary: 'new EventEmitter<any>()' },
      table: { type: { summary: 'EventEmitter' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSSelectorsComponent>;

export const Default: Story = {
  args: {
    type: 'checkbox',
  },
  render: (args) => {
    const control = new FormControl('');

    return {
      props: {
        ...args,
        control,
      },
      template: `
          <bs2-ds-selectors
            [type]="type"
            [control]="control"
            value="Selector Value"
          />
      `,
    };
  },
};

export const Radio: Story = {
  args: {
    control: new FormControl(null),
  },
  render: (args) => {
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    return {
      props: { ...args, options },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSSelectorsComponent } from "@bs2/design-system/components/bs2-ds-selectors";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSSelectorsComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public options = [
    { id: 1, text: 'Banana' },
    { id: 2, text: 'Maça' },
    { id: 3, text: 'Uva' },
  ];
}
-->

<!-- HTML -->
<ng-container *ngFor="let item of options">
  <bs2-ds-selectors
    type="radio"
    [control]="control"
    [value]="item.id"
  >
    <ng-template>{{ item.text }}</ng-template>
  </bs2-ds-selectors>
</ng-container>
      `,
    };
  },
};

export const Checkbox: Story = {
  render: () => {
    const control = new FormControl([]);
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    const emitter = () => {
      if (control.value.length === options.length) return control.setValue([]);
      if (control.value.length >= 0) return control.setValue(options.map((item) => item.id));
    };

    return {
      props: { control, options, emitter },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSSelectorsComponent } from "@bs2/design-system/components/bs2-ds-selectors";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSSelectorsComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public options = [
    { id: 1, text: 'Banana' },
    { id: 2, text: 'Maça' },
    { id: 3, text: 'Uva' },
  ];

  public emitter(): void {
    if (this.control.value.length === this.options.length) return this.control.setValue([]);
    if (this.control.value.length >= 0) return this.control.setValue(this.options.map((item) => item.id));
  }
}
-->

<!-- HTML -->
<bs2-ds-selectors
  type="checkbox"
  [control]="control"
  value="Todos"
  [isMain]="true"
  [totalItemsCount]="options.length"
  (emitter)="emitter($event)"
>
  <ng-template>Todos</ng-template>
</bs2-ds-selectors>

<ng-container *ngFor="let item of options">
  <bs2-ds-selectors
    type="checkbox"
    [control]="control"
    [value]="item.id"
  >
    <ng-template>{{ item.text }}</ng-template>
  </bs2-ds-selectors>
</ng-container>
      `,
    };
  },
};

export const Switch: Story = {
  render: () => {
    const control = new FormControl([]);
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    const emitter = () => {
      if (control.value.length === options.length) return control.setValue([]);
      if (control.value.length >= 0) return control.setValue(options.map((item) => item.id));
    };

    return {
      props: {
        control,
        options,
        emitter,
      },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSSelectorsComponent } from "@bs2/design-system/components/bs2-ds-selectors";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSSelectorsComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public options = [
    { id: 1, text: 'Banana' },
    { id: 2, text: 'Maça' },
    { id: 3, text: 'Uva' },
  ];

  public emitter(): void {
    if (this.control.value.length === this.options.length) return this.control.setValue([]);
    if (this.control.value.length >= 0) return this.control.setValue(this.options.map((item) => item.id));
  }
}
-->

<!-- HTML -->
<bs2-ds-selectors
  type="switch"
  [control]="control"
  value="Todos"
  [isMain]="true"
  [totalItemsCount]="options.length"
  (emitter)="emitter($event)"
>
  <ng-template>Todos</ng-template>
</bs2-ds-selectors>

<ng-container *ngFor="let item of options">
  <bs2-ds-selectors
    type="switch"
    [control]="control"
    [value]="item.id"
  >
    <ng-template>{{ item.text }}</ng-template>
  </bs2-ds-selectors>
</ng-container>
      `,
    };
  },
};
