import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';
import { Bs2DSChipsComponent, Bs2DSChipOption } from '@bs2/design-system/components/bs2-ds-chips';

const options: Bs2DSChipOption[] = Array(5)
  .fill(0)
  .map((_, i) => ({
    value: `item ${String(i + 1).padStart(2, '0')}`,
    label: `item ${String(i + 1).padStart(2, '0')}`,
    disabled: [3, 4, 5].includes(i),
  }));

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
    options,
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
export class YourComponentComponent {}
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
