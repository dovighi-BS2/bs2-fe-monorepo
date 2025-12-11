import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';

@Component({
  selector: 'bs2-ds-dialog-mock',
  standalone: true,
  imports: [Bs2DSFilledButtonDirective],
  template: `
    <ng-template #iconTemplate>
      <p style="font-size: 48px; margin: 0">⚠️</p>
    </ng-template>

    <button bs2-ds-filled-button (click)="openDialog()">Abrir diálogo</button>
  `,
})
class Bs2DSDialogMockComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  @Input() title!: string;
  @Input() content!: string | TemplateRef<any>;
  @Input() primaryText!: string;
  @Input() secondaryText?: string;
  @Input() showIcon = false;

  openDialog() {
    const args: DialogData = {
      title: this.title,
      content: this.content,
      primaryText: this.primaryText,
      secondaryText: this.secondaryText,
      showIcon: this.showIcon,
      iconTemplate: this.showIcon ? this.iconTemplate : undefined,
    };

    this.dialog.open(Bs2DsDialogComponent, { data: args });
  }
}

const meta: Meta<Bs2DSDialogMockComponent> = {
  title: 'Components/Dialog',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os modais de diálogo são elementos de interface que interrompem temporariamente a interação do usuário com a página principal para apresentar uma informação importante, solicitar uma ação específica ou coletar dados. Eles são como pequenas janelas que se sobrepõem ao conteúdo principal, exigindo que o usuário interaja com eles antes de continuar navegando e podem ter objetivos como informar algo ou solicitar ações específicas.
          São caracterizados basicamente por isolar o conteúdo principal, focando a atenção do usuário na informação apresentada no modal, bloqueando a interação com outros elementos da página até que o modal seja fechado.

        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSDialogMockComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: max-content; }`],
    }),
  ],
  component: Bs2DSDialogMockComponent,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    content: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    showIcon: {
      control: 'boolean',
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: "boolean" } },
    },
  },
};

export default meta;
type Story = StoryObj<Bs2DSDialogMockComponent>;

export const Default: Story = {
  args: {
    title: 'Título padrão',
    content: 'Texto do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
    showIcon: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DsDialogComponent, Bs2DSFilledButtonDirective], ... })
export class YourComponentComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;
  public title: string = 'Título padrão';
  public content: string = 'Texto do diálogo';
  public primaryText: string = 'Confirmar';
  public secondaryText: string = 'Cancelar';
  public showIcon: boolean = false;

  openDialog() {
    this.dialog.open(Bs2DsDialogComponent, { data: {
        title: this.title,
        content: this.content,
        primaryText: this.primaryText,
        secondaryText: this.secondaryText,
        showIcon: this.showIcon,
    } as DialogData });
  }
}
-->

<!-- HTML -->
<button bs2-ds-filled-button (click)="openDialog()">Abrir diálogo</button>
        `,
      }
    }
  }
};

export const WithTemplate: Story = {
  args: {
    title: 'Diálogo com Template',
    content: 'Simulação de TemplateRef',
    primaryText: 'Ok',
    secondaryText: 'Cancelar',
    showIcon: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DsDialogComponent, Bs2DSFilledButtonDirective], ... })
export class YourComponentComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  openDialog() {
    this.dialog.open(Bs2DsDialogComponent, { data: {
        title: 'Diálogo com Template',
        content: 'Simulação de TemplateRef',
        primaryText: 'Ok',
        secondaryText: 'Cancelar',
        showIcon: false,
        iconTemplate: this.iconTemplate,
    } as DialogData });
  }
}
-->

<!-- HTML -->
<ng-template #iconTemplate>
  <p style="font-size: 48px; margin: 0">⚠️</p>
</ng-template>

<button bs2-ds-filled-button (click)="openDialog()">Abrir diálogo</button>
        `,
      }
    }
  }
};

export const WithIcon: Story = {
  args: {
    title: 'Diálogo com Ícone',
    content: 'Texto simples do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
    showIcon: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DsDialogComponent, Bs2DSFilledButtonDirective], ... })
export class YourComponentComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  openDialog() {
    this.dialog.open(Bs2DsDialogComponent, { data: {
        title: 'Diálogo com Ícone',
        content: 'Texto simples do diálogo',
        primaryText: 'Confirmar',
        secondaryText: 'Cancelar',
        showIcon: true,
    } as DialogData });
  }
}
-->

<!-- HTML -->
<button bs2-ds-filled-button (click)="openDialog()">Abrir diálogo</button>
        `,
      }
    }
  }
};

export const NoSecondaryButton: Story = {
  args: {
    title: 'Apenas botão primário',
    content: 'Diálogo sem botão secundário',
    primaryText: 'Confirmar',
    showIcon: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DsDialogComponent, Bs2DSFilledButtonDirective], ... })
export class YourComponentComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  openDialog() {
    this.dialog.open(Bs2DsDialogComponent, { data: {
        title: 'Apenas botão primário',
        content: 'Diálogo sem botão secundário',
        primaryText: 'Confirmar',
        showIcon: false,
    } as DialogData });
  }
}
-->

<!-- HTML -->
<button bs2-ds-filled-button (click)="openDialog()">Abrir diálogo</button>
        `,
      }
    }
  }
};
