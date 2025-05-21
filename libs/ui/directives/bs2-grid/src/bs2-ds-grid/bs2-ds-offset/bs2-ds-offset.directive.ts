import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-offset]',
  standalone: true,
})
export class Bs2DSOffsetDirective implements OnInit {
  @Input('bs2-ds-offset') offsets: number[] = [];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const offsets: number[] = this.offsets;

    if (!isNaN(offsets[0]) && offsets[0] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__xs_${offsets[0]}`);
    if (!isNaN(offsets[1]) && offsets[1] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__sm_${offsets[1]}`);
    if (!isNaN(offsets[2]) && offsets[2] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__md_${offsets[2]}`);
    if (!isNaN(offsets[3]) && offsets[3] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__lg_${offsets[3]}`);
    if (!isNaN(offsets[4]) && offsets[4] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__xl_${offsets[4]}`);
    if (!isNaN(offsets[5]) && offsets[5] !== 0)
      this.elRef.nativeElement.classList.add(`bs2_ds_offset__xxl_${offsets[5]}`);
  }
}
