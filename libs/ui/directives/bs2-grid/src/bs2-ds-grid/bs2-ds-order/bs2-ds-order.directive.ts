import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-order]',
  standalone: true,
})
export class Bs2DSOrderDirective implements OnInit {
  @Input('bs2-ds-order') orders: number[] = [];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const orders: number[] = this.orders;

    if (!isNaN(orders[0]) && orders[0] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__xs_${orders[0]}`);
    if (!isNaN(orders[1]) && orders[1] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__sm_${orders[1]}`);
    if (!isNaN(orders[2]) && orders[2] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__md_${orders[2]}`);
    if (!isNaN(orders[3]) && orders[3] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__lg_${orders[3]}`);
    if (!isNaN(orders[4]) && orders[4] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__xl_${orders[4]}`);
    if (!isNaN(orders[5]) && orders[5] !== 0) this.elRef.nativeElement.classList.add(`bs2_ds_order__xxl_${orders[5]}`);
  }
}
