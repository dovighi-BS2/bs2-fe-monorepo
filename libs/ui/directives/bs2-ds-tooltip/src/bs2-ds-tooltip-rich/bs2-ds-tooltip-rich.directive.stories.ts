import { Bs2DSTooltipRichDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';

@Component({
  selector: 'bs2-ds-tooltip-rich-mock',
  template: ``,
  standalone: true,
})
class MockTooltipComponent {
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() centered: boolean = false;
}

const meta: Meta<MockTooltipComponent> = {
  component: MockTooltipComponent,
  title: 'Directives/Tooltip Rich',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Tooltips são elementos interativos de interface que fornecem informações adicionais sobre um elemento específico quando o usuário passa o mouse sobre ele ou interage de alguma outra forma predefinida.
          Elas servem para esclarecer dúvidas, fornecer instruções rápidas ou apresentar detalhes que não cabem no design principal, sem sobrecarregar a interface, refinando a clareza de informações e a experiência do usuário.
          <br/><br />
          Apresenta múltiplas linhas de texto, pode ter subtítulo e botões de ação.
          Uso: Útil para fornecer informações mais detalhadas sem sobrecarregar o usuário com muito texto na interface principal.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockTooltipComponent,
        Bs2DSTooltipRichDirective,
        Bs2DSFilledButtonDirective,
        Bs2DSFlatButtonDirective,
        Bs2DSOutlinedButtonDirective,
      ],
    }),
  ],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: { summary: 'top' },
      table: { type: { summary: "'top' | 'right' | 'bottom' | 'left'" } },
    },
    centered: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<MockTooltipComponent>;

export const Default: Story = {
  args: {
    position: 'top',
    centered: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipRichDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipRichDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<style>
  button + button { margin-left: 10px; }
</style>
<ng-template #tooltipRichTemplate>
  Conteúdo full dinamico!
</ng-template>

<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="${args.position}" ${args.centered ? 'centered' :''}>${args.position} position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="${args.position}" ${args.centered ? 'centered' :''}>${args.position} position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="${args.position}" ${args.centered ? 'centered' :''}>${args.position} position tooltip-rich!</button>
<br>
    `,
  }),
};

export const Positions: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipRichDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipRichDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<style>
  button + button { margin-left: 10px; }
</style>
<ng-template #tooltipRichTemplate>
  Conteúdo full dinamico!
</ng-template>

<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
<br><br>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
<br><br>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="top">top position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="right">right position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" position="left">left position tooltip-rich!</button>
<br>
    `,
  }),
};

export const Centered: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTooltipRichDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTooltipRichDirective], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<ng-template #tooltipRichTemplate>
  Conteúdo full dinamico!
</ng-template>
<style> button + button { margin-left: 10px; } </style>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-filled-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
<br><br>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-flat-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
<br><br>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="top">top position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="right">right position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="bottom">bottom position tooltip-rich!</button>
<button bs2-ds-outlined-button [bs2-ds-tooltip-rich]="tooltipRichTemplate" centered position="left">left position tooltip-rich!</button>
<br>
    `,
  }),
};
