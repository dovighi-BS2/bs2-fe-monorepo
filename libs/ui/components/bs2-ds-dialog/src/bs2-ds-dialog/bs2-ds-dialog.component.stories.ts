import { Meta, StoryObj } from '@storybook/angular';
import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from './bs2-ds-dialog.component';

@Component({
  selector: 'storybook-bs2-dialog-button-wrapper',
  standalone: true,
  template: `
    <ng-template #iconTemplate>
      <p style="font-size: 48px; margin: 0">⚠️</p>
    </ng-template>

    <button (click)="openDialog()">Abrir diálogo</button>
  `,
})
class ButtonWrapperComponent {
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

const meta: Meta<ButtonWrapperComponent> = {
  title: 'Components/Dialog',
  component: ButtonWrapperComponent,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ButtonWrapperComponent>;

export const Default: Story = {
  args: {
    title: 'Título padrão',
    content: 'Texto do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
    showIcon: false,
  },
};

export const WithTemplate: Story = {
  args: {
    title: 'Diálogo com Template',
    content: 'Simulação de TemplateRef',
    primaryText: 'Ok',
    secondaryText: 'Cancelar',
    showIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Diálogo com Ícone',
    content: 'Texto simples do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
    showIcon: true,
  },
};

export const NoSecondaryButton: Story = {
  args: {
    title: 'Apenas botão primário',
    content: 'Diálogo sem botão secundário',
    primaryText: 'Confirmar',
    showIcon: false,
  },
};
