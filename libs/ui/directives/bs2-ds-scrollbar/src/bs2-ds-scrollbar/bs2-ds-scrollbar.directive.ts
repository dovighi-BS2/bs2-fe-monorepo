import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bs2-ds-scrollbar]',
  standalone: true,
})
export class Bs2DSScrollbarDirective {
  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('bs2_ds_scrollbar');
  }
}
