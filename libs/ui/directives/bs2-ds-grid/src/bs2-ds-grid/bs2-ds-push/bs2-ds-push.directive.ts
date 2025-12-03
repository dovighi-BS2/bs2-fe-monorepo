import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-push]',
  standalone: true,
})
export class Bs2DSPushDirective implements OnInit {
  @Input('bs2-ds-push') pushs: number[] = [];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const pushs: number[] = this.pushs;

    if (!isNaN(pushs[0]) && pushs[0] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__xs_${pushs[0]}`);
    if (!isNaN(pushs[1]) && pushs[1] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__sm_${pushs[1]}`);
    if (!isNaN(pushs[2]) && pushs[2] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__md_${pushs[2]}`);
    if (!isNaN(pushs[3]) && pushs[3] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__lg_${pushs[3]}`);
    if (!isNaN(pushs[4]) && pushs[4] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__xl_${pushs[4]}`);
    if (!isNaN(pushs[5]) && pushs[5] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_push__xxl_${pushs[5]}`);
  }
}
