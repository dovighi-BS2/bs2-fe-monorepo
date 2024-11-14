import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollbar]',
  standalone: true,
})
export class ScrollbarDirective {
  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('scrollbar');
  }
}
