import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';
import { Bs2DSChipsComponent, Bs2DSChipOption } from '@bs2/design-system/components/bs2-ds-chips';

const meta: Meta<Bs2DSChipsComponent> = {
  component: Bs2DSChipsComponent,
  title: 'Form Components/Chips Checkbox',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os chips são componentes compactos e visualmente distintos com a função de agrupar, organizar e destacar pequenas unidades de informações como tags, categorias, seleções ou filtros, permitindo escolhas do usuário em espaços reduzidos.
          Geralmente em formato retangular arredondado, podem incluir texto, ícones ou ambos, proporcionando uma experiência visual coesa e eficiente e oferecem uma forma prática de condensar dados.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSChipsComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
      table: { type: { summary: 'FormControl' } },
    },
    options: {
      control: 'object',
      defaultValue: { summary: '[]' },
      table: { type: { summary: 'Bs2DSChipOption[] | string[]' } },
    },
    maxSelectable: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number' } },
    },
    minSelectable: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSChipsComponent>;

export const Default: Story = {
  args: {
    control: new FormControl([]),
    options: [
      { label: 'Item 01' },
      { label: 'Item 02' },
      { label: 'Item 03', disabled: true },
      { label: 'Item 04', disabled: true },
      { label: 'Item 05' },
    ] as Bs2DSChipOption[],
    minSelectable: 1,
    maxSelectable: 1,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSChipsComponent } from "@bs2/design-system/components/bs2-ds-chips";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSChipsComponent], ... })
export class YourComponentComponent {
    public control: FormControl = new FormControl([]);
    public options: Bs2DSChipOption[] = [
      { label: 'Item 01' },
      { label: 'Item 02' },
      { label: 'Item 03', disabled: true },
      { label: 'Item 04', disabled: true },
      { label: 'Item 05' },
    ];
    public minSelectable: number = 1;
    public maxSelectable: number = 1;
}
-->

<!-- HTML -->
<bs2-ds-chips
  [control]="control"
  [options]="options"
  [minSelectable]="minSelectable"
  [maxSelectable]="maxSelectable"
/>
    `,
  }),
};

export const UsingArrayOfStringAsValueType: Story = {
  name: 'Using Array of string as value type',
  args: {
    control: new FormControl([]),
    options: ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'],
    minSelectable: 1,
    maxSelectable: 1,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSChipsComponent } from "@bs2/design-system/components/bs2-ds-chips";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSChipsComponent], ... })
export class YourComponentComponent {
    public control: FormControl = new FormControl([]);
    public options: string[] = ["Item 01", "Item 02", "Item 03", "Item 04", "Item 05"];
    public minSelectable: number = 1;
    public maxSelectable: number = 1;
}
-->

<!-- HTML -->
<bs2-ds-chips
  [control]="control"
  [options]="options"
  [minSelectable]="minSelectable"
  [maxSelectable]="maxSelectable"
/>
    `,
  }),
};

export const UsingBs2DSChipOptionType: Story = {
  name: 'Using Bs2DSChipOption Type',
  args: {
    control: new FormControl([]),
    options: [
      { label: 'Item 01' },
      { label: 'Item 02' },
      { label: 'Item 03', disabled: true },
      { label: 'Item 04', disabled: true },
      { label: 'Item 05' },
    ] as Bs2DSChipOption[],
    minSelectable: 1,
    maxSelectable: 1,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSChipsComponent } from "@bs2/design-system/components/bs2-ds-chips";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSChipsComponent], ... })
export class YourComponentComponent {
    public control: FormControl = new FormControl([]);
    public options: Bs2DSChipOption[] = [
      { label: 'Item 01' },
      { label: 'Item 02' },
      { label: 'Item 03', disabled: true },
      { label: 'Item 04', disabled: true },
      { label: 'Item 05' },
    ];
    public minSelectable: number = 1;
    public maxSelectable: number = 1;
}
-->

<!-- HTML -->
<bs2-ds-chips
  [control]="control"
  [options]="options"
  [minSelectable]="minSelectable"
  [maxSelectable]="maxSelectable"
/>
    `,
  }),
};
