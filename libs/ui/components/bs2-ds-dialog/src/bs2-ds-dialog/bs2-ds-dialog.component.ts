import { Component, TemplateRef, Inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

export interface DialogData {
  title: string;
  content?: string | TemplateRef<any>;
  primaryText?: string;
  secondaryText?: string;
  showIcon?: boolean;
  iconTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-bs2-ds-dialog',
  templateUrl: './bs2-ds-dialog.component.html',
  styleUrls: ['./bs2-ds-dialog.component.scss'],
  imports: [NgTemplateOutlet, Bs2DSFilledButtonDirective, Bs2DSOutlinedButtonDirective],
  standalone: true,
})
export class Bs2DsDialogComponent {
  constructor(
    public dialogRef: DialogRef<{ action: 'primary' | 'secondary' }>,
    @Inject(DIALOG_DATA) public data: DialogData
  ) {}

  get isTemplate(): boolean {
    return this.data.content instanceof TemplateRef;
  }

  get templateContent(): TemplateRef<any> | null {
    return this.isTemplate ? (this.data.content as TemplateRef<any>) : null;
  }

  onPrimary(): void {
    this.dialogRef.close({ action: 'primary' });
  }

  onSecondary(): void {
    this.dialogRef.close({ action: 'secondary' });
  }
}
