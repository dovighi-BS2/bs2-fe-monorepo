import { Bs2DSTooltipDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';

@Component({
  selector: 'bs2-ds-tooltip-mock',
  template: ``,
  standalone: true,
})
class MockTooltipComponent {
  @Input() message: string = 'Nice!';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() centered: boolean = false;
}

const meta: Meta<MockTooltipComponent> = {
  component: MockTooltipComponent,
  title: 'Directives/Tooltip',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Tooltips são elementos interativos de interface que fornecem informações adicionais sobre um elemento específico quando o usuário passa o mouse sobre ele ou interage de alguma outra forma predefinida.
          Elas servem para esclarecer dúvidas, fornecer instruções rápidas ou apresentar detalhes que não cabem no design principal, sem sobrecarregar a interface, refinando a clareza de informações e a experiência do usuário.
          <br /><br />
          Apresenta uma breve informação quando o usuário passa o mouse sobre um elemento.
          Uso: Ideal para fornecer uma breve explicação de ícones ou botões que podem não ser imediatamente óbvios.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockTooltipComponent,
        Bs2DSTooltipDirective,
        Bs2DSFilledButtonDirective,
        Bs2DSFlatButtonDirective,
        Bs2DSOutlinedButtonDirective,
      ],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: max-content; }`],
    }),
  ],
  argTypes: {
    message: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: "string" } },
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom','left'],
      defaultValue: { summary: 'top' },
      table: { type: { summary: "'top' | 'right' | 'bottom' | 'left'" } },
    },
    centered: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: "boolean" } },
    },
  }
};
export default meta;
type Story = StoryObj<MockTooltipComponent>;

export const Default: Story = {
  args: {
    message: 'Nice!',
    position: 'top',
    centered: false
  },
  render: (args) => ({
    props: { ...args},
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<style> button + button { margin-left: 10px; } </style>
<button bs2-ds-filled-button bs2-ds-tooltip="${args.message}" position="${args.position}" ${args.centered ? 'centered' : ''}>${args.position} position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="${args.message}" position="${args.position}" ${args.centered ? 'centered' : ''}>${args.position} position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="${args.message}" position="${args.position}" ${args.centered ? 'centered' : ''}>${args.position} position tooltip!</button>
<br>
    `,
  }),
};

export const Positions: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<style> button + button { margin-left: 10px; } </style>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
<br><br>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
<br><br>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="top">top position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="right">right position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="bottom">bottom position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" position="left">left position tooltip!</button>
<br>
    `,
  }),
};

export const Centered: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<style> button + button { margin-left: 10px; } </style>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
<button bs2-ds-filled-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
<br><br>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
<button bs2-ds-flat-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
<br><br>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="top">top position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="right">right position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="bottom">bottom position tooltip!</button>
<button bs2-ds-outlined-button bs2-ds-tooltip="Nice!" centered position="left">left position tooltip!</button>
      <br>
    `,
  }),
};
