import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from '@bs2/design-system/components/bs2-ds-dialog';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private dialog = inject(Dialog);

  @ViewChild('customText', { static: true }) customText!: TemplateRef<any>;
  @ViewChild('customIcon', { static: true }) customIcon!: TemplateRef<any>;

  openBasic() {
    this.openDialog({
      title: 'Dialog',
      content: 'Este é um diálogo simples',
      primaryText: 'Confirmar',
      secondaryText: 'Cancelar',
      showIcon: false,
    });
  }

  openWithTemplate() {
    this.openDialog({
      title: 'Dialog com template',
      content: this.customText,
      primaryText: 'Continuar',
      showIcon: false,
    });
  }

  openWithIcon() {
    this.openDialog({
      title: 'Diálogo com ícone',
      content: 'Ícone vindo de um TemplateRef',
      primaryText: 'Continuar',
      secondaryText: 'Cancelar',
      showIcon: true,
      iconTemplate: this.customIcon,
    });
  }

  private openDialog(data: DialogData) {
    this.dialog.open(Bs2DsDialogComponent, { data });
  }
}
