import { Bs2DSTooltipRichDirective } from "@bs2/design-system/directives/bs2-ds-tooltip";
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';
import { Bs2DSTooltipAction } from "./bs2-ds-tooltip-action.interface";

@Component({
  selector: 'bs2-ds-tooltip-rich-mock',
  template: ``,
  standalone: true,
})
class MockTooltipComponent {
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() centered = false;

  bs2DsTooltipTitle = 'Título do tooltip';
  bs2DsTooltipDescription =
    'Descrição do tooltip com mais detalhes sobre a ação.';

  bs2DsTooltipActions: Bs2DSTooltipAction[] = [
    { label: 'Confirmar', variant: 'primary' },
    { label: 'Cancelar', variant: 'secondary' },
  ];
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
    },
    centered: {
      control: 'boolean',
    },

    bs2DsTooltipTitle: {
      control: 'text',
    },
    bs2DsTooltipDescription: {
      control: 'text',
    },
    bs2DsTooltipActions: {
      control: 'object',
      description: 'Array de ações: { label: string; variant: "primary"|"secondary"; onClick?: () => void }[]',
    },

  },
};

export default meta;
type Story = StoryObj<MockTooltipComponent>;

export const Default: Story = {
  args: {
    position: 'top',
    centered: false,
    bs2DsTooltipTitle: 'Título do tooltip',
    bs2DsTooltipDescription:
      'Descrição do tooltip com mais detalhes sobre a ação. Descrição do tooltip com mais detalhes sobre a ação.',
    bs2DsTooltipActions: [
      {
        "label": "Confirmar",
        "variant": "primary"
      }, {
        "label": "Cancelar",
        "variant": "secondary"
      }
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <style>
        button + button { margin-left: 10px; }
      </style>

      <button
        bs2-ds-filled-button
        bs2-ds-tooltip-rich
        [bs2DsTooltipTitle]="bs2DsTooltipTitle"
        [bs2DsTooltipDescription]="bs2DsTooltipDescription"
        [bs2DsTooltipActions]="bs2DsTooltipActions"
        position="${args.position}"
        ${args.centered ? 'centered' : ''}
      >
        ${args.position} position tooltip-rich!
      </button>

      <button
        bs2-ds-flat-button
        bs2-ds-tooltip-rich
        [bs2DsTooltipTitle]="bs2DsTooltipTitle"
        [bs2DsTooltipDescription]="bs2DsTooltipDescription"
        [bs2DsTooltipActions]="bs2DsTooltipActions"
        position="${args.position}"
        ${args.centered ? 'centered' : ''}
      >
        ${args.position} position tooltip-rich!
      </button>

      <button
        bs2-ds-outlined-button
        bs2-ds-tooltip-rich
        [bs2DsTooltipTitle]="bs2DsTooltipTitle"
        [bs2DsTooltipDescription]="bs2DsTooltipDescription"
        [bs2DsTooltipActions]="bs2DsTooltipActions"
        position="${args.position}"
        ${args.centered ? 'centered' : ''}
      >
        ${args.position} position tooltip-rich!
      </button>
      `,
  }),
};



export const Positions: Story = {
  render: () => ({
    template: `
<style> button + button { margin-left: 10px; } </style>

<button bs2-ds-filled-button bs2-ds-tooltip-rich position="top"
  [bs2DsTooltipTitle]="'Top'"
  [bs2DsTooltipDescription]="'Tooltip posição top'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  top position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich position="right"
  [bs2DsTooltipTitle]="'Right'"
  [bs2DsTooltipDescription]="'Tooltip posição right'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  right position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich position="bottom"
  [bs2DsTooltipTitle]="'Bottom'"
  [bs2DsTooltipDescription]="'Tooltip posição bottom'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  bottom position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich position="left"
  [bs2DsTooltipTitle]="'Left'"
  [bs2DsTooltipDescription]="'Tooltip posição left'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  left position tooltip-rich!
</button>
`,
  }),
};


export const Centered: Story = {
  render: () => ({
    template: `
<style> button + button { margin-left: 10px; } </style>

<button bs2-ds-filled-button bs2-ds-tooltip-rich centered position="top"
  [bs2DsTooltipTitle]="'Top centered'"
  [bs2DsTooltipDescription]="'Tooltip centralizado'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  top position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich centered position="right"
  [bs2DsTooltipTitle]="'Right centered'"
  [bs2DsTooltipDescription]="'Tooltip centralizado'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  right position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich centered position="bottom"
  [bs2DsTooltipTitle]="'Bottom centered'"
  [bs2DsTooltipDescription]="'Tooltip centralizado'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  bottom position tooltip-rich!
</button>

<button bs2-ds-filled-button bs2-ds-tooltip-rich centered position="left"
  [bs2DsTooltipTitle]="'Left centered'"
  [bs2DsTooltipDescription]="'Tooltip centralizado'"
  [bs2DsTooltipActions]="bs2DsTooltipActions">
  left position tooltip-rich!
</button>
`,
  }),
};
