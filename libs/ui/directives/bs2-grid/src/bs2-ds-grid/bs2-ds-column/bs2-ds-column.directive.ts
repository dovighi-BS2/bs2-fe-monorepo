import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-column]',
  standalone: true,
})
export class Bs2DSColumnDirective implements OnInit {
  @Input('bs2-ds-column') columns: number[] = [12, 12, 12, 12, 12, 12];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const columns: number[] = this.columns;

    if (!isNaN(columns[0]) && columns[0] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__xs_${columns[0]}`);
    if (!isNaN(columns[1]) && columns[1] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__sm_${columns[1]}`);
    if (!isNaN(columns[2]) && columns[2] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__md_${columns[2]}`);
    if (!isNaN(columns[3]) && columns[3] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__lg_${columns[3]}`);
    if (!isNaN(columns[4]) && columns[4] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__xl_${columns[4]}`);
    if (!isNaN(columns[5]) && columns[5] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_column__xxl_${columns[5]}`);
  }
}
