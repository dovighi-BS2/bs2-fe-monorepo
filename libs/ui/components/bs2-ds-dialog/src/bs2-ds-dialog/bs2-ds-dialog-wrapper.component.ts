import { Component, AfterViewInit, inject, TemplateRef, ViewChild } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from './bs2-ds-dialog.component';

@Component({
  selector: 'storybook-bs2-dialog-wrapper',
  standalone: true,
  template: `
    <ng-template #iconTemplate>
      <p style="font-size: 48px; margin: 0">⚠️</p>
    </ng-template>
  `,
})
export class Bs2DsDialogWrapperComponent implements AfterViewInit {
  dialog = inject(Dialog);
  @ViewChild('iconTemplate', { static: true }) iconTemplate!: TemplateRef<any>;

  ngAfterViewInit() {
    const args = (window as any)['storybookArgs'] as DialogData;

    if (args.showIcon) {
      args.iconTemplate = this.iconTemplate;
    }

    this.dialog.open(Bs2DsDialogComponent, { data: args });
  }
}
