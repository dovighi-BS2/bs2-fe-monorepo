import { Component, AfterViewInit, inject, TemplateRef, ViewChild, Input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from './bs2-ds-dialog.component';

@Component({
  selector: 'storybook-bs2-dialog-wrapper',
  standalone: true,
  template: `
    <ng-template #iconTemplate>
      <p style="font-size: 48px; margin: 0">⚠️</p>
    </ng-template>

    <button (click)="openDialog()" style="margin-top: 16px;">Abrir diálogo</button>
  `,
})
export class Bs2DsDialogWrapperComponent {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  @Input() data!: DialogData;

  openDialog() {
    const args: DialogData = { ...this.data };

    if (args.showIcon) {
      args.iconTemplate = this.iconTemplate;
    }

    this.dialog.open(Bs2DsDialogComponent, { data: args });
  }
}
