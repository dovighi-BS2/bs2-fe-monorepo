import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Bs2DsDialogComponent, DialogData } from './bs2-ds-dialog.component';

@Injectable({ providedIn: 'root' })
export class Bs2DSDialogService {
  private dialog = inject(Dialog);

  openDialog(data: DialogData) {
    return this.dialog.open(Bs2DsDialogComponent, { data });
  }
}
